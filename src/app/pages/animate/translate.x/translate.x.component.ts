/*
 * @Author: carlos
 * @Date: 2023-08-25 15:33:24
 * @LastEditTime: 2023-08-25 16:20:53
 * @FilePath: \ng-test\src\app\pages\animate\translate.x\translate.x.component.ts
 * @Description: null
 */
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'translate',
  templateUrl: './translate.x.component.html',
  styles: [],
  animations: [
    trigger('appear', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)',
          backgroundColor: 'red',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
          backgroundColor: 'blue',
        })
      ),
      transition('show => hide', [animate(400)]),

      transition('hide => show', [animate(400)]),
    ]),
  ],
})
export class TranslateXComponent implements OnInit {
  state = false;
  ngOnInit(): void {
    const destroyRef = inject(DestroyRef);
    const timer$ = interval(3000).subscribe(() => {
      this.state = !this.state;
    });
    destroyRef.onDestroy(timer$.unsubscribe);
  }
}
