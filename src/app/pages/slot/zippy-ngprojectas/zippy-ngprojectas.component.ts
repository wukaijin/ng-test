/*
 * @Author: Carlos
 * @Date: 2023-07-30 23:58:21
 * @LastEditTime: 2023-07-31 00:40:34
 * @FilePath: /ng-test/src/app/pages/slot/zippy-ngprojectas/zippy-ngprojectas.component.ts
 * @Description: null
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-ngprojectas',
  template: `
    <h2>Content projection with ngProjectAs</h2>

    Default:
    <ng-content></ng-content>

    Question:
    <ng-content select="[question]"></ng-content>
  `,
})
export class ZippyNgprojectasComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
