/*
 * @Author: carlos
 * @Date: 2023-08-09 11:12:12
 * @LastEditTime: 2023-08-10 18:04:33
 * @FilePath: \ng-test\src\main.ts
 * @Description: null
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
