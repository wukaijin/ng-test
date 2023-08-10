/*
 * @Author: carlos
 * @Date: 2023-08-10 15:32:35
 * @LastEditTime: 2023-08-10 15:41:44
 * @FilePath: \ng-test\src\app\pages\pages.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '@app/components/layout/layout.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, LayoutModule, PagesRoutingModule],
})
export class PagesModule {}
