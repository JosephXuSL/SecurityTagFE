import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginComponent } from './pages/login/admin-login/admin-login.component';
import { CustomerLoginComponent } from './pages/login/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './pages/login/customer-register/customer-register.component';
import { AdminRegisterComponent } from './pages/login/admin-register/admin-register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'login/user', component: CustomerLoginComponent },
  { path: 'login/operator', component: AdminLoginComponent },
  { path: 'register/user', component: CustomerRegisterComponent },
  { path: 'register/operator', component: AdminRegisterComponent },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  { path: 'main', loadChildren: () => import('./pages/customer/customer.module').then(m => m.CustomerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
