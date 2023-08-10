/*
 * @Author: carlos
 * @Date: 2023-08-10 16:12:01
 * @LastEditTime: 2023-08-10 16:48:43
 * @FilePath: \ng-test\src\app\auth\login\login.component.ts
 * @Description: null
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  login() {
    console.log('login');
  }
}
