/*
 * @Author: Carlos
 * @Date: 2023-07-29 17:43:55
 * @LastEditTime: 2023-07-30 22:44:50
 * @FilePath: /ng-test/src/app/pages/todo-list/todo-list.component.ts
 * @Description: null
 */
import { Component, ViewEncapsulation } from '@angular/core';
import type {
  OnInit,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

interface ITask {
  id: string;
  content: string;
  state: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TodoListComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    AfterContentChecked,
    OnDestroy
{
  text = '';
  list: ITask[] = [];
  ngOnInit() {
    console.log('ngOnInit', this.now());
  }
  ngOnChanges(simpleChanged: SimpleChanges) {
    console.log('ngOnChanges', this.now(), simpleChanged);
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit', this.now());
  }
  ngDoCheck(...a: any[]) {
    // console.log('ngDoCheck', this.now(), a);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked', this.now());
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit', this.now());
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked', this.now());
  }
  ngOnDestroy() {
    console.log('ngOnDestroy', this.now());
  }
  now() {
    return new Date().getTime();
  }
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
