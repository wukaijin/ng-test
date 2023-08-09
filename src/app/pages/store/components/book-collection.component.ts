/*
 * @Author: carlos
 * @Date: 2023-08-09 13:56:36
 * @LastEditTime: 2023-08-09 13:56:49
 * @FilePath: \ng-test\src\app\pages\store\components\book.component.ts
 * @Description: null
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: [],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
