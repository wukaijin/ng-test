/*
 * @Author: Carlos
 * @Date: 2023-07-29 17:43:55
 * @LastEditTime: 2023-07-29 17:59:23
 * @FilePath: /ng-test/src/app/pages/todo-list/todo-list.component.ts
 * @Description: null
 */
import { Component } from '@angular/core';

interface ITask {
  id: string;
  content: string;
  state: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less'],
})
export class TodoListComponent {
  text = '';
  list: ITask[] = [];
  onAdd(t: string) {
    this.list.push({
      id: new Date().getTime().toString(),
      content: t,
      state: true,
    });
  }
  onChange(task: ITask) {
    console.log(task);
  }
  onRemove(task: ITask) {
    this.list = this.list.filter((t) => t !== task);
  }
}
