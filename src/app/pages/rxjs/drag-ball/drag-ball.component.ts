import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import {
  concatAll,
  fromEvent,
  map,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs';

@Component({
  selector: 'drag-ball',
  templateUrl: './drag-ball.component.html',
  styleUrls: ['./drag-ball.component.less'],
})
export class DragBallComponent implements AfterViewInit {
  @Input() id!: string;
  @ViewChild('dragBall', { static: true })
  dragBall!: ElementRef<HTMLDivElement>;
  top: number = 100;
  left: number = 100;
  maxX: number = 0;
  maxY: number = 0;
  pOffsetX: number = 0;
  pOffsetY: number = 0;
  offsetX: number = 0;
  offsetY: number = 0;
  ngAfterViewInit(): void {
    if (this.dragBall && this.dragBall.nativeElement) {
      this.attachEvent(this.dragBall.nativeElement);
      const parentElement = this.dragBall.nativeElement
        .offsetParent! as HTMLDivElement;

      setTimeout(() => {
        const { height, width } = parentElement.getBoundingClientRect();
        this.maxX = width - 100;
        this.maxY = height - 100;
        this.pOffsetX = parentElement.offsetLeft;
        this.pOffsetY = parentElement.offsetTop;
      });
    }
  }
  // attachEvent(ball: HTMLDivElement) {
  //   const dragstart$ = fromEvent(ball, 'dragstart');
  //   const blur$ = fromEvent(ball.offsetParent!, 'mouseenter');
  //   dragstart$.subscribe((e) => {
  //     e.preventDefault();

  //     const { offsetX, offsetY } = e as DragEvent;
  //     this.offsetX = offsetX;
  //     this.offsetY = offsetY;

  //     const drag$ = fromEvent(document.body, 'mousemove');
  //     const dragend$ = fromEvent(document.body, 'mouseup');
  //     const ds = drag$.subscribe((e) => {
  //       const { pageX, pageY } = e as DragEvent;

  //       const cY = pageY - this.offsetY - this.pOffsetY;
  //       const cX = pageX - this.offsetX - this.pOffsetX;

  //       this.top = Math.max(0, Math.min(cY, this.maxY));
  //       this.left = Math.max(0, Math.min(cX, this.maxX));
  //     });
  //     dragend$.subscribe(() => {
  //       ds.unsubscribe();
  //     });
  //     blur$.subscribe(() => {
  //       ds.unsubscribe();
  //     });
  //   });
  // }
  attachEvent(ball: HTMLDivElement) {
    const dragstart$ = fromEvent<DragEvent>(ball, 'dragstart');
    const blur$ = fromEvent(ball.offsetParent!, 'mouseenter');
    const drag$ = fromEvent<MouseEvent>(document.body, 'mousemove');
    const dragend$ = fromEvent(document.body, 'mouseup');

    dragstart$
      .pipe(
        tap((e) => {
          e.preventDefault();
          return e;
        }),
        map(() => drag$.pipe(takeUntil(dragend$), takeUntil(blur$))),
        concatAll(),
        withLatestFrom(dragstart$),
        map(([drag, dragstart]) => ({
          drag,
          dragstart,
        }))
      )
      .subscribe((e) => {
        const { drag, dragstart } = e;

        const { offsetX, offsetY } = dragstart;
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        const { pageX, pageY } = drag;
        const cY = pageY - this.offsetY - this.pOffsetY;
        const cX = pageX - this.offsetX - this.pOffsetX;
        this.top = Math.max(0, Math.min(cY, this.maxY));
        this.left = Math.max(0, Math.min(cX, this.maxX));
      });
  }
}
