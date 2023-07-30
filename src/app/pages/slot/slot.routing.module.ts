/*
 * @Author: Carlos
 * @Date: 2023-07-30 23:50:49
 * @LastEditTime: 2023-07-30 23:53:34
 * @FilePath: /ng-test/src/app/pages/slot/slot.routing.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlotComponent } from './slot.component';

const routes: Routes = [{ path: '', component: SlotComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlotRoutingModule {}
