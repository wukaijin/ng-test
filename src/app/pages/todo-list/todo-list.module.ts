/*
 * @Author: Carlos
 * @Date: 2023-07-29 17:47:11
 * @LastEditTime: 2023-07-29 18:18:45
 * @FilePath: /ng-test/src/app/pages/todo-list/todo-list.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list.routing.module';

import { TodoListComponent } from './todo-list.component';

@NgModule({
  imports: [TodoListRoutingModule, FormsModule, CommonModule],
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
})
export class TodoListModule {}
