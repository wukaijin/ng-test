/*
 * @Author: carlos
 * @Date: 2023-08-10 16:12:01
 * @LastEditTime: 2023-08-10 16:48:43
 * @FilePath: \ng-test\src\app\auth\login\login.component.ts
 * @Description: null
 */
import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  validateForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder) {}
  login() {
    console.log('login');
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
