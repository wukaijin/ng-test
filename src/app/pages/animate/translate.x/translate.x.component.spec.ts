import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateXComponent } from './translate.x.component';

describe('TranslateXComponent', () => {
  let component: TranslateXComponent;
  let fixture: ComponentFixture<TranslateXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslateXComponent]
    });
    fixture = TestBed.createComponent(TranslateXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
