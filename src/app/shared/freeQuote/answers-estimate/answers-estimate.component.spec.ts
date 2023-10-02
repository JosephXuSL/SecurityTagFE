import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswersEstimateComponent } from './answers-estimate.component';

describe('AnswersEstimateComponent', () => {
  let component: AnswersEstimateComponent;
  let fixture: ComponentFixture<AnswersEstimateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswersEstimateComponent]
    });
    fixture = TestBed.createComponent(AnswersEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
