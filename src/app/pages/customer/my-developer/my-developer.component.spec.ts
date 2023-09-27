import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDeveloperComponent } from './my-developer.component';

describe('MyDeveloperComponent', () => {
  let component: MyDeveloperComponent;
  let fixture: ComponentFixture<MyDeveloperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyDeveloperComponent]
    });
    fixture = TestBed.createComponent(MyDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
