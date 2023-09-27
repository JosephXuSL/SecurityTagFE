import { Component, OnInit } from '@angular/core';
import { FormControl, FormRecord, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-security-tag',
  templateUrl: './security-tag.component.html',
  styleUrls: ['./security-tag.component.scss']
})
export class SecurityTagComponent implements OnInit {
  validateForm: FormRecord<FormControl<string>> = this.fb.record({});
 

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: NonNullableFormBuilder) { }

  ngOnInit(): void {
    this.validateForm.addControl(`appName`, this.fb.control(''));
    this.validateForm.addControl(`appid`, this.fb.control(''));
    this.validateForm.addControl(`developerName`, this.fb.control(''));
  }
}
