/*
 * @Author: carlos
 * @Date: 2023-08-10 11:07:06
 * @LastEditTime: 2023-08-11 13:56:36
 * @FilePath: \ng-test\src\app\pages\rxjs\rxjs.component.ts
 * @Description: null
 */
import { Component, OnInit } from '@angular/core';
import {
  fromEvent,
  interval,
  timer,
  of,
  forkJoin,
  partition,
  concat,
  merge,
  zip,
} from 'rxjs';
import {
  map,
  take,
  exhaustAll,
  exhaustMap,
  concatMap,
  concatAll,
  mergeAll,
  startWith,
  endWith,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.less'],
})
export class RxjsComponent implements OnInit {
  clicks$ = fromEvent(document, 'click');
  handleExhaustAll() {
    // console.log('handleExhaustAll');
    // const higherOrder = this.clicks$.pipe(
    //   map(() => interval(1000).pipe(take(5)))
    // );
    // const result = higherOrder.pipe(exhaustAll());
    // result.subscribe(console.log);

    console.log('handleExhaustAll');
    const higherOrder = this.clicks$.pipe(
      map(() => interval(1000).pipe(take(5))),
      exhaustAll()
    );
    // const result = higherOrder.pipe();
    higherOrder.subscribe(console.log);
  }
  handleExhaustMap() {
    console.log('handleExhaustMap');
    const higherOrder = this.clicks$.pipe(
      exhaustMap((e) => {
        console.log(e);
        return interval(1000).pipe(take(5));
      })
    );
    higherOrder.subscribe(console.log);
  }
  /**
   * concatAll
   * 高阶转低阶，按顺序订阅每一个 Observable。
   * tips：高阶的 Observable，一个 Observable中还嵌套着其它 Observable
   */
  handleConcatAll() {
    console.log('handleConcatAll');
    const higherOrder$ = this.clicks$.pipe(
      map((ev) => interval(1000).pipe(take(2)))
    );
    // 下面输出由interval创建出来的 observable
    higherOrder$.subscribe((res) => console.log(res));
    // 合并
    const firstOrder$ = higherOrder$.pipe(concatAll());
    // 没点击一次页面，将每隔一秒输出0 1
    firstOrder$.subscribe(console.log);
  }
  handleConcatMap() {
    const source = of(1, 2, 3);
    timer(3000)
      .pipe(concatMap(() => source))
      .subscribe(console.log);

    // EMPTY.pipe(() => concat(timer(3000), source)).subscribe(console.log);
  }
  handleMerge() {
    console.log('handleMerge');
    const interval$ = interval(1000);
    const merged$ = merge(this.clicks$, interval$);
    // 定时器一直从0开始持续输出，每点击一次输出fromEvent创建的流
    merged$.subscribe(console.log);
  }
  handleMergeAll() {
    const higherOrder$ = this.clicks$.pipe(map((ev) => interval(1000)));
    const firstOrder$ = higherOrder$.pipe(mergeAll());
    // 每点一次，就会发送一个interval创建的流，点的次数越多，创建的流也就越多
    firstOrder$.subscribe(console.log);
  }
  handleMapTo() {
    console.log('handleMapTo');
    const interval1$ = interval(1000).pipe(
      take(10),
      map(() => 'a')
    );
    const interval2$ = interval(2000).pipe(
      take(6),
      map(() => 'b')
    );
    const interval3$ = interval(500).pipe(
      take(10),
      map(() => 'c')
    );
    // 最后一个参数设为2，表示不管合并了多少个流，最多也只能merge其中的两个（与参数顺序无关）
    const merged$ = merge(interval1$, interval2$, interval3$, 2);
    merged$.subscribe(console.log);
  }
  handleForkJoin() {
    const observable = forkJoin([
      of(1, 2, 3, 4),
      Promise.resolve(8),
      timer(4000),
    ]);
    /**
     * 输出：
     * [4, 8, 0]
     * 'This is how it ends!'
     * **/
    // observable.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('This is how it ends!'),
    // });
    const time$ = timer(4000);
    time$.subscribe(console.log);
  }
  handlePartition() {
    const observableValues = of(1, 2, 3, 4, 5, 6);
    const [evens$, odds$] = partition(
      observableValues,
      (value, index) => value % 2 === 0
    );
    odds$.subscribe((x) => console.log('odds', x));
    evens$.subscribe((x) => console.log('evens', x));
  }
  handleZip() {
    const age$ = of(27, 25, 29);
    const name$ = of('Foo', 'Bar', 'Beer');
    const isDev$ = of(true, true, false);
    zip(age$, name$, isDev$).subscribe(console.log);
  }
  handleWith() {
    of('source')
      .pipe(startWith('开始接收数据'), endWith('接收数据完成'))
      .subscribe((x) => console.log(x));
  }
  ngOnInit(): void {}
}
