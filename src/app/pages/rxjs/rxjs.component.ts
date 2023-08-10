/*
 * @Author: carlos
 * @Date: 2023-08-10 11:07:06
 * @LastEditTime: 2023-08-10 11:38:06
 * @FilePath: \ng-test\src\app\pages\rxjs\rxjs.component.ts
 * @Description: null
 */
import { Component, OnInit } from '@angular/core';
import { fromEvent, map, interval, take, exhaustAll, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.less'],
})
export class RxjsComponent implements OnInit {
  clicks = fromEvent(document, 'click');
  handleExhaustAll() {
    // console.log('handleExhaustAll');
    // const higherOrder = this.clicks.pipe(
    //   map(() => interval(1000).pipe(take(5)))
    // );
    // const result = higherOrder.pipe(exhaustAll());
    // result.subscribe((x) => console.log(x));

    console.log('handleExhaustAll');
    const higherOrder = this.clicks.pipe(
      map(() => interval(1000).pipe(take(5))),
      exhaustAll()
    );
    // const result = higherOrder.pipe();
    higherOrder.subscribe((x) => console.log(x));
  }
  handleExhaustMap() {
    console.log('handleExhaustMap');
    const higherOrder = this.clicks.pipe(
      exhaustMap((e) => {
        console.log(e);
        return interval(1000).pipe(take(5));
      })
    );
    higherOrder.subscribe((x) => console.log(x));
  }
  ngOnInit(): void {}
}
