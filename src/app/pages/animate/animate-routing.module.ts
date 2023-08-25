/*
 * @Author: carlos
 * @Date: 2023-08-24 17:05:50
 * @LastEditTime: 2023-08-25 10:04:21
 * @FilePath: \ng-test\src\app\pages\animate\animate-routing.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimateComponent } from './animate.component';

const routes: Routes = [{ path: '', component: AnimateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimateRoutingModule {}
