/*
 * @Author: Carlos
 * @Date: 2023-07-30 23:57:44
 * @LastEditTime: 2023-07-30 23:57:49
 * @FilePath: /ng-test/src/app/pages/slot/zippy-multislot/zippy-multislot.component.ts
 * @Description: null
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-multislot',
  template: `
    <h2>Multi-slot content projection</h2>

    Default:
    <ng-content></ng-content>

    Question:
    <ng-content select="[question]"></ng-content>
  `,
})
export class ZippyMultislotComponent {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
