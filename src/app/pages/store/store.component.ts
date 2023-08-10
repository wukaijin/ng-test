/*
 * @Author: carlos
 * @Date: 2023-08-09 11:41:59
 * @LastEditTime: 2023-08-10 13:05:54
 * @FilePath: \ng-test\src\app\pages\store\store.component.ts
 * @Description: null
 */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksService } from '@app/service/book.service';
import { selectBooks } from '@app/store/book/book.selector';
import { selectBookCollection } from '@app/store/book/book.selector';
import { BooksActions, BooksApiActions } from '@app/store/book/book.actions';

@Component({
  selector: 'page-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.less'],
})
export class StoreComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  constructor(private store: Store, private bookService: BooksService) {}
  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }
  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.store.dispatch(BooksApiActions.retrievedBookList({ books }));
    });
  }
}
