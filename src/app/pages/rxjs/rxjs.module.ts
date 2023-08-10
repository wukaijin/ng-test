/*
 * @Author: carlos
 * @Date: 2023-08-10 11:07:45
 * @LastEditTime: 2023-08-10 11:16:07
 * @FilePath: \ng-test\src\app\pages\rxjs\rxjs.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { RxjsRoutingModule } from './rxjs-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@NgModule({
  declarations: [RxjsComponent],
  imports: [CommonModule, RxjsRoutingModule, NzButtonModule, NzSpaceModule],
})
export class RxjsModule {}
