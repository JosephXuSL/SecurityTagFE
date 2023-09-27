import { Component, OnInit } from '@angular/core';
import { FormControl, FormRecord, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {
  validateForm: FormRecord<FormControl<string>> = this.fb.record({});
 

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: NonNullableFormBuilder) { }

  ngOnInit(): void {
    this.validateForm.addControl(`developerName`, this.fb.control(''));
  }

}
