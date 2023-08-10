/*
 * @Author: Carlos
 * @Date: 2023-07-29 17:29:05
 * @LastEditTime: 2023-08-10 15:39:39
 * @FilePath: \ng-test\src\app\app-routing.module.ts
 * @Description: null
 */
import { Injectable, NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  TitleStrategy,
  RouterStateSnapshot,
} from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { Title } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pages/rxjs' },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  { path: '**', component: NotFoundComponent },
];

@Injectable()
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    console.log('routerState: ', routerState);
    if (title !== undefined) {
      this.title.setTitle(` ${title} | My Application`);
    } else {
      this.title.setTitle(`My Application`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
  ],
})
export class AppRoutingModule {}
