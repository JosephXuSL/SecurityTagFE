import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperAuditComponent } from './developer-audit.component';

describe('DeveloperAuditComponent', () => {
  let component: DeveloperAuditComponent;
  let fixture: ComponentFixture<DeveloperAuditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeveloperAuditComponent]
    });
    fixture = TestBed.createComponent(DeveloperAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
