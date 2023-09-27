import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityTagDetailComponent } from './security-tag-detail.component';

describe('SecurityTagDetailComponent', () => {
  let component: SecurityTagDetailComponent;
  let fixture: ComponentFixture<SecurityTagDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityTagDetailComponent]
    });
    fixture = TestBed.createComponent(SecurityTagDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
