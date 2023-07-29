/*
 * @Author: Carlos
 * @Date: 2023-07-29 17:48:08
 * @LastEditTime: 2023-07-29 17:48:37
 * @FilePath: /ng-test/src/app/pages/todo-list/todo-list.routing.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list.component';

const routes: Routes = [{ path: '', component: TodoListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoListRoutingModule {}
