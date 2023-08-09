/*
 * @Author: carlos
 * @Date: 2023-08-09 13:50:00
 * @LastEditTime: 2023-08-09 13:50:11
 * @FilePath: \ng-test\src\app\store\book\book.selector.ts
 * @Description: null
 */
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<string>>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);
