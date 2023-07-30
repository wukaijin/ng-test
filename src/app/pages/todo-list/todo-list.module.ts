/*
 * @Author: Carlos
 * @Date: 2023-07-29 17:47:11
 * @LastEditTime: 2023-07-30 22:45:16
 * @FilePath: /ng-test/src/app/pages/todo-list/todo-list.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { TodoListRoutingModule } from './todo-list.routing.module';

import { TodoListComponent } from './todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [
    TodoListRoutingModule,
    FormsModule,
    CommonModule,
    NzButtonModule,
    NzInputModule,
    NzCheckboxModule,
    NzIconModule,
  ],
  declarations: [TodoListComponent, TodoItemComponent],
  exports: [TodoListComponent],
})
export class TodoListModule {}
