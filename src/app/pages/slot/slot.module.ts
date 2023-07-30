import {
  ZippyContentDirective,
  ZippyToggleDirective,
} from './zippy-example/example-zippy.component';
/*
 * @Author: Carlos
 * @Date: 2023-07-29 17:47:11
 * @LastEditTime: 2023-07-31 00:47:59
 * @FilePath: /ng-test/src/app/pages/slot/slot.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SlotRoutingModule } from './slot.routing.module';
import { SlotComponent } from './slot.component';
import { ZippyBasicComponent } from './zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './zippy-multislot/zippy-multislot.component';
import { ZippyComponent } from './zippy-example/example-zippy.component';
import { ZippyNgprojectasComponent } from './zippy-ngprojectas/zippy-ngprojectas.component';

@NgModule({
  imports: [SlotRoutingModule, FormsModule, CommonModule],
  declarations: [
    SlotComponent,
    ZippyBasicComponent,
    ZippyMultislotComponent,
    ZippyComponent,
    ZippyNgprojectasComponent,
    ZippyToggleDirective,
    ZippyContentDirective,
  ],
  exports: [SlotComponent],
})
export class SlotModule {}
