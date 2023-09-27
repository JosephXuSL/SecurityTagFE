import { Component, ViewEncapsulation  } from '@angular/core';
import { merge, Observable, timer, Observer } from 'rxjs';
import { delay, finalize, map, scan } from 'rxjs/operators';
import { AbstractControl,  AsyncValidatorFn,  FormControl,  FormGroup,  NonNullableFormBuilder,  ValidationErrors,  ValidatorFn,  Validators} from '@angular/forms';

interface SyncStep {
  id: number;
  title: string;
  description: string;
  async: false;
  percentage: null;
}

interface AsyncStep {
  id: number;
  title: string;
  description: string;
  async: true;
  percentage: number;
}

type Step = SyncStep | AsyncStep;

function mockAsyncStep(): Observable<number> {
  const subStep1 = timer(600).pipe(map(() => 25));
  const subStep2 = subStep1.pipe(delay(600));
  const subStep3 = subStep2.pipe(delay(600));
  const subStep4 = subStep3.pipe(delay(600));
  return merge(subStep1, subStep2, subStep3, subStep4).pipe(scan((a, b) => a + b));
}

@Component({
  selector: 'app-customer-register',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.scss']
})
export class CustomerRegisterComponent {

  constructor(private fb: NonNullableFormBuilder) {
    this.validateAccountForm = this.fb.group({
      accountName: ['', [Validators.required], [this.accountNameAsyncValidator]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]]
    });
    this.validateUserInfoForm = this.fb.group({
      userName: ['', [Validators.required]],
      userID: ['', [Validators.required]],
      gen: ['', [Validators.required]],
      mobile: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
 
  emailOptions: string[] = [];

  steps: Step[] = [
    {
      id: 1,
      title: `第1步`,
      description: `填写账户信息`,
      async: false,
      percentage: null
    },
    {
      id: 2,
      title: `第2步`,
      description: `填写个人信息`,
      async: false,
      percentage: null
    },
    {
      id: 3,
      title: `第3步`,
      description: `创建完成 ！`,
      async: true,
      percentage: 0
    }
  ];

  current = 0;
  processing = false;

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.loadingAndStep();
  }

  done(): void {
    this.loadingAndStep();
    console.log('done');
  }

  trackById(_: number, item: Step): number {
    return item.id;
  }

  loadingAndStep(): void {
    if (this.current < this.steps.length) {
      const step = this.steps[this.current];
      if (step.async) {
        this.processing = true;
        mockAsyncStep()
          .pipe(
            finalize(() => {
              step.percentage = 0;
              this.processing = false;
              this.current += 1;
            })
          )
          .subscribe(p => {
            step.percentage = p;
          });
      } else {
        this.current += 1;
      }
    }
  }

  validateAccountForm: FormGroup<{
    accountName: FormControl<string>;
    password: FormControl<string>;
    confirm: FormControl<string>;
  }>;

  validateUserInfoForm: FormGroup<{
    userName: FormControl<string>;
    userID: FormControl<string>;
    gen: FormControl<string>;
    mobile: FormControl<string>;
    email: FormControl<string>;
  }>;

  submitForm(): void {
    console.log('submit', this.validateAccountForm.value , this.validateUserInfoForm.value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateAccountForm.reset();
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateAccountForm.controls.confirm.updateValueAndValidity());
  }

  accountNameAsyncValidator: AsyncValidatorFn = (control: AbstractControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator: ValidatorFn = (control: AbstractControl) => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateAccountForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  onEmailInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value || value.indexOf('@') >= 0) {
      this.emailOptions = [];
    } else {
      this.emailOptions = ['gmail.com', '163.com', 'qq.com','126.com','yahoo.com','foxmail.com'].map(domain => `${value}@${domain}`);
    }
  }
}
