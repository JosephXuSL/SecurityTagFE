import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { en_US, NzI18nService} from 'ng-zorro-antd/i18n';

interface  Answer {
    firstName: string;
    lastName: string;
    gender: string;
    zipCode: string;
    birthday?:  Date;
    phoneNumber: string;
    email: string;  
}

type AnswerType =  Answer;

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent  implements OnInit{
  errorType: string = '';
  dateFormate: string ='MM/DD/YYY';
  emailOptions: string[] = [];
  validateForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    gender: FormControl<string>;
    zipCode: FormControl<string>;
    birthday:  FormControl<Date | null>;
    phoneNumber: FormControl<string>;
    email: FormControl<string>;
  }>;

  answer : AnswerType= {
    firstName :'',
    lastName :'',
    gender:'male',
    zipCode:'',
    birthday:undefined,
    phoneNumber:'',
    email:''
  };

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(data =>{
      if(data){
        var detail=JSON.parse(data['detail']);
        this.answer=detail;
      }
    })
  }

  submitForm(): void {
    if (this.validateForm.valid && this.answer.birthday) {
      this.errorType='';
      const routerParams: NavigationExtras = {
        queryParams: {
          detail: JSON.stringify(this.validateForm.value)
        }
      };
      this.router.navigate(['estimate'],routerParams);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }        
      });
      if(!this.answer.birthday){
        this.errorType='error';
      }
    }
  }

  onEmailInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value || value.indexOf('@') >= 0) {
      this.emailOptions = [];
    } else {
      this.emailOptions = ['gmail.com', '163.com', 'qq.com','126.com','yahoo.com','foxmail.com'].map(domain => `${value}@${domain}`);
    }
  } 

  constructor(private fb: NonNullableFormBuilder, private i18n: NzI18nService,private router: Router
    , private activatedRoute: ActivatedRoute) {
    this.validateForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      birthday: this.fb.control<Date | null>(null),
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]]
    });
    this.i18n.setLocale(en_US);
  }
}
