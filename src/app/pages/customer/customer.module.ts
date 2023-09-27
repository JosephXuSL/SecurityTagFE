import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '../../icons-provider.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { CustomerComponent } from './customer.component';
import { HomeComponent } from './home/home.component';
import { MyBusinessComponent } from './my-business/my-business.component';
import { MyDeveloperComponent } from './my-developer/my-developer.component';
import { MyAppTagComponent } from './my-app-tag/my-app-tag.component';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [
    CustomerComponent,
    HomeComponent,
    MyBusinessComponent,
    MyDeveloperComponent,
    MyAppTagComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzFormModule,
    NzStepsModule,
    IconsProviderModule,
    NzCarouselModule
  ]
})
export class CustomerModule { }
