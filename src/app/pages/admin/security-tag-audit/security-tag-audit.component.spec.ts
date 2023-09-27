import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityTagAuditComponent } from './security-tag-audit.component';

describe('SecurityTagAuditComponent', () => {
  let component: SecurityTagAuditComponent;
  let fixture: ComponentFixture<SecurityTagAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityTagAuditComponent]
    });
    fixture = TestBed.createComponent(SecurityTagAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
