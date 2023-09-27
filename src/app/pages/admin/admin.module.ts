import { NgModule } from '@angular/core';
import { IconsProviderModule } from '../../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AdminRoutingModule } from './admin-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

import { AdminComponent } from './admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { SecurityTagComponent } from './security-tag/security-tag.component';
import { DeveloperComponent } from './developer/developer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecurityTagAuditComponent } from './security-tag-audit/security-tag-audit.component';
import { DeveloperAuditComponent } from './developer-audit/developer-audit.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { SecurityTagDetailComponent } from './security-tag-detail/security-tag-detail.component';



@NgModule({
  imports: [
    AdminRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzStepsModule,
    NzEmptyModule,
    CommonModule
  ],
  declarations: [
    AdminComponent,
    EmployeeComponent,
    SecurityTagComponent,
    DeveloperComponent,
    DashboardComponent,
    SecurityTagAuditComponent,
    DeveloperAuditComponent, 
    DeveloperDetailComponent, 
    SecurityTagDetailComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
