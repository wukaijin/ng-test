/*
 * @Author: carlos
 * @Date: 2023-08-10 16:11:53
 * @LastEditTime: 2023-08-10 16:46:28
 * @FilePath: \ng-test\src\app\auth\login\login.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, CoreModule],
})
export class LoginModule {}
