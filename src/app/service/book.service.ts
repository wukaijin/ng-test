/*
 * @Author: carlos
 * @Date: 2023-08-09 13:53:34
 * @LastEditTime: 2023-08-09 14:35:20
 * @FilePath: \ng-test\src\app\service\book.service.ts
 * @Description: null
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{ data: Book[] }>('/nest-api/blog/category')
      .pipe(map((books) => books.data || []));
  }
}
