/*
 * @Author: carlos
 * @Date: 2023-08-09 16:06:35
 * @LastEditTime: 2023-08-09 17:36:04
 * @FilePath: \ng-test\src\app\effect\index.ts
 * @Description: null
 */
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './book.effect';

export default EffectsModule.forRoot(BookEffects);
