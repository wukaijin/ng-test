/*
 * @Author: carlos
 * @Date: 2023-08-10 16:40:07
 * @LastEditTime: 2023-08-10 17:06:49
 * @FilePath: \ng-test\src\app\@core\core.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

const pipedModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  NzButtonModule,
  NzGridModule,
  NzFormModule,
  NzInputModule,
  NzTypographyModule,
];

@NgModule({
  declarations: [],
  imports: [...pipedModules],
  exports: [...pipedModules],
})
export class CoreModule {}
