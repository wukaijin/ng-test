/*
 * @Author: Carlos
 * @Date: 2023-07-30 23:55:05
 * @LastEditTime: 2023-07-30 23:55:12
 * @FilePath: /ng-test/src/app/pages/slot/zippy-basic/zippy-basic.component.ts
 * @Description: null
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-basic',
  template: `
    <h2>Single-slot content projection</h2>
    <ng-content></ng-content>
  `,
})
export class ZippyBasicComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
