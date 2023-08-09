/*
 * @Author: carlos
 * @Date: 2023-08-09 12:08:44
 * @LastEditTime: 2023-08-09 12:09:58
 * @FilePath: \ng-test\src\app\store\book\book.action.ts
 */
import { createActionGroup, props } from '@ngrx/store';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});
