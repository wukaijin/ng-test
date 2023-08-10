/*
 * @Author: carlos
 * @Date: 2023-08-10 11:08:40
 * @LastEditTime: 2023-08-10 15:39:01
 * @FilePath: \ng-test\src\app\pages\rxjs\rxjs-routing.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsComponent } from './rxjs.component';

const routes: Routes = [{ path: '', component: RxjsComponent, title: 'Rxjs' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule {}
