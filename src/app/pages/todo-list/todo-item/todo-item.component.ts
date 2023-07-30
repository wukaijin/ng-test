import { OnInit } from '@angular/core';
/*
 * @Author: Carlos
 * @Date: 2023-07-30 22:23:23
 * @LastEditTime: 2023-07-30 22:43:33
 * @FilePath: /ng-test/src/app/pages/todo-list/todo-item/todo-item.component.ts
 * @Description: null
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent {
  @Input() task!: ITask;
  @Output() change = new EventEmitter<ITask>();
  @Output() remove = new EventEmitter<ITask>();
  onChange(t: ITask) {
    this.change.emit(t);
  }
  onRemove(t: ITask) {
    this.change.emit(t);
  }
  OnInit() {
    console.log('todo-item init');
  }
}
