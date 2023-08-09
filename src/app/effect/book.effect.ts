/*
 * @Author: carlos
 * @Date: 2023-08-09 16:38:26
 * @LastEditTime: 2023-08-09 18:14:18
 * @FilePath: \ng-test\src\app\effect\book.effect.ts
 * @Description: null
 */
import { Injectable } from '@angular/core';
import { BooksService } from '@app/service/book.service';
import { BooksApiActions } from '@app/store/book/book.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, tap } from 'rxjs';

Injectable();
export class BookEffects {
  // loadBooks$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(BooksApiActions.retrievedBookList),
  //     exhaustMap(() =>
  //       this.bookService.getBooks().pipe(
  //         map((books) => ({
  //           type: '[Movies API] Movies Loaded Success',
  //           payload: books,
  //         })),
  //         catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
  //       )
  //     )
  //     tap(() => console.log('Effect'))
  //   );
  // });
  // constructor(private actions$: Actions, private bookService: BooksService) {}
  constructor() {}
}
