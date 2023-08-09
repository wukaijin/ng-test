/*
 * @Author: carlos
 * @Date: 2023-08-09 12:12:31
 * @LastEditTime: 2023-08-09 12:12:40
 * @FilePath: \ng-test\src\app\store\book\collection.reducer.ts
 * @Description: null
 */
import { createReducer, on } from '@ngrx/store';
import { BooksActions } from './book.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);
