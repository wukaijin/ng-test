/*
 * @Author: Carlos
 * @Date: 2023-07-29 17:29:05
 * @LastEditTime: 2023-07-29 17:36:26
 * @FilePath: /ng-test/src/app/app.component.ts
 * @Description: null
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'ng-test';
  isCollapsed = false;
}
