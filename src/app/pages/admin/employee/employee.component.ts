import { Component, OnInit } from '@angular/core';
import { FormControl, FormRecord, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  validateForm: FormRecord<FormControl<string>> = this.fb.record({});
 

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: NonNullableFormBuilder) { }

  ngOnInit(): void {
    this.validateForm.addControl(`name`, this.fb.control(''));
    this.validateForm.addControl(`eid`, this.fb.control(''));
  }
}
