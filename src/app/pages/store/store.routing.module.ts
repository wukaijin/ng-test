/*
 * @Author: carlos
 * @Date: 2023-08-09 11:43:35
 * @LastEditTime: 2023-08-09 12:03:11
 * @FilePath: \ng-test\src\app\pages\store\store.routing.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';

const routes: Routes = [{ path: '', component: StoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
