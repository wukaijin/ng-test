/*
 * @Author: carlos
 * @Date: 2023-08-09 11:41:28
 * @LastEditTime: 2023-08-09 14:56:03
 * @FilePath: \ng-test\src\app\pages\store\store.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { BookCollectionComponent } from './components/book-collection.component'
import { BookListComponent } from './components/book-list.component'
import { StoreRoutingModule } from './store.routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [StoreComponent, BookCollectionComponent, BookListComponent],
  imports: [StoreRoutingModule, CommonModule, NzButtonModule],
  exports: [StoreComponent],
})
export class StoreModule {}
