/*
 * @Author: carlos
 * @Date: 2023-08-09 11:12:12
 * @LastEditTime: 2023-08-10 15:03:06
 * @FilePath: \ng-test\src\app\pages\welcome\welcome-routing.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeRoutingModule {}
