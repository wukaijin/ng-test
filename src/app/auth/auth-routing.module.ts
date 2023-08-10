/*
 * @Author: carlos
 * @Date: 2023-08-10 16:10:24
 * @LastEditTime: 2023-08-10 16:35:26
 * @FilePath: \ng-test\src\app\auth\auth-routing.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      { path: '**', redirectTo: 'login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AuthRoutingModule {}
