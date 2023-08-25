/*
 * @Author: Carlos
 * @Date: 2023-07-29 17:29:05
 * @LastEditTime: 2023-08-24 17:08:57
 * @FilePath: \ng-test\src\app\pages\pages-routing.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () =>
          import('./welcome/welcome.module').then((m) => m.WelcomeModule),
      },
      {
        path: 'store',
        loadChildren: () =>
          import('./store/store.module').then((m) => m.StoreModule),
      },
      {
        path: 'rxjs',
        loadChildren: () =>
          import('./rxjs/rxjs.module').then((m) => m.RxjsModule),
      },
      {
        path: 'todo-list',
        loadChildren: () =>
          import('./todo-list/todo-list.module').then((m) => m.TodoListModule),
      },
      {
        path: 'slot',
        loadChildren: () =>
          import('./slot/slot.module').then((m) => m.SlotModule),
      },

      {
        path: 'animate',
        loadChildren: () =>
          import('./animate/animate.module').then((m) => m.AnimateModule),
      },
      { path: '**', redirectTo: 'welcome' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class PagesRoutingModule {}
