/*
 * @Author: carlos
 * @Date: 2023-08-09 12:11:17
 * @LastEditTime: 2023-08-09 12:12:02
 * @FilePath: \ng-test\src\app\store\book\book.reducer.ts
 * @Description: null
 */
import { createReducer, on } from '@ngrx/store';

import { BooksApiActions } from './book.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);
