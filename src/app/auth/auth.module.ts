/*
 * @Author: carlos
 * @Date: 2023-08-10 16:09:12
 * @LastEditTime: 2023-08-10 16:30:00
 * @FilePath: \ng-test\src\app\auth\auth.module.ts
 * @Description: null
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, RouterModule, AuthRoutingModule],
})
export class AuthModule {}
