/*
 * @Author: carlos
 * @Date: 2023-08-09 12:13:21
 * @LastEditTime: 2023-08-09 12:14:41
 * @FilePath: \ng-test\src\app\store\index.ts
 * @Description: null
 */
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './book/book.reducer';
import { collectionReducer } from './book/collection.reducer';

export default StoreModule.forRoot({
  books: booksReducer,
  collection: collectionReducer,
});
