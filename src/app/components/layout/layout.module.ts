/*
 * @Author: carlos
 * @Date: 2023-08-10 15:09:10
 * @LastEditTime: 2023-08-10 15:37:49
 * @FilePath: \ng-test\src\app\components\layout\layout.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconsProviderModule } from '@app/icons-provider.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    IconsProviderModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
