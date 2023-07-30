/*
 * @Author: Carlos
 * @Date: 2023-07-31 00:00:02
 * @LastEditTime: 2023-07-31 00:46:08
 * @FilePath: /ng-test/src/app/pages/slot/zippy-example/example-zippy.component.ts
 * @Description: null
 */
import {
  Component,
  Directive,
  Input,
  TemplateRef,
  ContentChild,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: 'button[appExampleZippyToggle]',
})
export class ZippyToggleDirective {
  @HostBinding('attr.aria-expanded') ariaExpanded = this.zippy.expanded;
  @HostBinding('attr.aria-controls') ariaControls = this.zippy.contentId;
  @HostListener('click') toggleZippy() {
    this.zippy.expanded = !this.zippy.expanded;
  }
  constructor(public zippy: ZippyComponent) {}
  ngOnInit() {
    console.log('Toggle Directive init');
  }
}

let nextId = 0;

@Directive({
  selector: '[appExampleZippyContent]',
})
export class ZippyContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
  ngOnInit() {
    console.log('Content Directive init');
  }
}

@Component({
  selector: 'app-example-zippy',
  templateUrl: './example-zippy.template.html',
})
export class ZippyComponent {
  contentId = `zippy-${nextId++}`;
  @Input() expanded = false;
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
