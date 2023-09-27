import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityTagComponent } from './security-tag.component';

describe('SecurityTagComponent', () => {
  let component: SecurityTagComponent;
  let fixture: ComponentFixture<SecurityTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityTagComponent]
    });
    fixture = TestBed.createComponent(SecurityTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
