/*
 * @Author: carlos
 * @Date: 2023-08-09 16:38:26
 * @LastEditTime: 2023-08-10 11:49:48
 * @FilePath: \ng-test\src\app\effect\book.effect.ts
 * @Description: null
 */
import { Injectable } from '@angular/core';
import { BooksService } from '@app/service/book.service';
import { BooksActions } from '@app/store/book/book.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, tap, EMPTY, exhaustAll } from 'rxjs';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      tap(() => console.log('Effect')),
      ofType(BooksActions.addBook),

      exhaustMap((ac) => {
        console.log(
          '%c addBook passed params: ',
          'color: red; font-weight: bold; font-size: 0.85rem;',
          ac
        );
        return EMPTY.pipe(
          tap(() => console.log('retrievedBookList Effect')),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        );
      })
      // tap(() => console.log('Effect'))
    );
  });
  constructor(private actions$: Actions, private bookService: BooksService) {}
}
