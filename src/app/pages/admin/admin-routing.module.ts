import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { SecurityTagComponent } from './security-tag/security-tag.component';
import { DeveloperComponent } from './developer/developer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecurityTagAuditComponent } from './security-tag-audit/security-tag-audit.component';
import { DeveloperAuditComponent } from './developer-audit/developer-audit.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { SecurityTagDetailComponent } from './security-tag-detail/security-tag-detail.component';

const routes: Routes = [
  { 
    path: '', component: AdminComponent,
    children: [    
      { path: '',  redirectTo:'dashboard', pathMatch:'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'developer', component: DeveloperComponent },
      { path: 'developerAudit', component: DeveloperAuditComponent },
      { path: 'securityTag', component: SecurityTagComponent },
      { path: 'securityTagAudit', component: SecurityTagAuditComponent },
      { path: 'developer/:id', component: DeveloperDetailComponent },
      { path: 'securityTag/:id', component: SecurityTagDetailComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
