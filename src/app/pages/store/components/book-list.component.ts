/*
 * @Author: carlos
 * @Date: 2023-08-09 13:55:09
 * @LastEditTime: 2023-08-09 13:55:46
 * @FilePath: \ng-test\src\app\pages\store\components\book-list.component.ts
 * @Description: null
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: [],
})
export class BookListComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() add = new EventEmitter<string>();
}
