import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import zh from '@angular/common/locales/zh';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerModule } from './pages/customer/customer.module';
import { AdminLoginComponent } from './pages/login/admin-login/admin-login.component';
import { CustomerLoginComponent } from './pages/login/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './pages/login/customer-register/customer-register.component';
import { AdminRegisterComponent } from './pages/login/admin-register/admin-register.component';

import { AnswersComponent } from './shared/freeQuote/answers/answers.component';
import { AnswersEstimateComponent } from './shared/freeQuote/answers-estimate/answers-estimate.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent,
    AdminRegisterComponent,
    AnswersComponent,
    AnswersEstimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzGridModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzRadioModule,
    NzDatePickerModule,
    NzStepsModule,
    NzFormModule,
    NzDropDownModule,
    NzSelectModule,
    NzSliderModule,
    NzToolTipModule,
    CommonModule,
    CustomerModule,
    NzAutocompleteModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
