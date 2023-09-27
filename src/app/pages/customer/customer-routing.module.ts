import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { HomeComponent } from './home/home.component';
import { MyBusinessComponent } from './my-business/my-business.component';
import { MyDeveloperComponent } from './my-developer/my-developer.component';
import { MyAppTagComponent } from './my-app-tag/my-app-tag.component';

const routes: Routes = [
  { 
    path: '', component: CustomerComponent,
    children: [    
      { path: '',  redirectTo:'home', pathMatch:'full' },
      { path: 'home', component: HomeComponent },
      { path: 'myBusiness', component: MyBusinessComponent },
      { path: 'myDeveloper', component: MyDeveloperComponent },
      { path: 'myAppTag', component: MyAppTagComponent }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
