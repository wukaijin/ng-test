/*
 * @Author: carlos
 * @Date: 2023-08-09 11:12:12
 * @LastEditTime: 2023-08-09 17:35:52
 * @FilePath: \ng-test\src\app\app.module.ts
 * @Description: null
 *
 *
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import storeRootModule from './store';
import effectsRootModule from './effect';
import { BooksService } from './service/book.service';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    storeRootModule,
    effectsRootModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
