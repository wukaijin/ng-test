/*
 * @Author: carlos
 * @Date: 2023-08-10 16:40:07
 * @LastEditTime: 2023-08-10 16:46:05
 * @FilePath: \ng-test\src\app\@core\core.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

const pipeTo = [CommonModule, NzButtonModule];

@NgModule({
  declarations: [],
  imports: [...pipeTo],
  exports: [...pipeTo],
})
export class CoreModule {}
