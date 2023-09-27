import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppTagComponent } from './my-app-tag.component';

describe('MyAppTagComponent', () => {
  let component: MyAppTagComponent;
  let fixture: ComponentFixture<MyAppTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppTagComponent]
    });
    fixture = TestBed.createComponent(MyAppTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
