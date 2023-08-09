/*
 * @Author: carlos
 * @Date: 2023-08-09 11:41:59
 * @LastEditTime: 2023-08-09 14:53:40
 * @FilePath: \ng-test\src\app\pages\store\store.component.spec.ts
 * @Description: null
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreComponent } from './store.component';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreComponent],
    });
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
