import { Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CusMatInputComponent } from '../../../common/widgets/cus-mat-input/cus-mat-input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CusMatInputComponent,
    MatCardModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  errorMessage = '';

  constructor(private fb: NonNullableFormBuilder) {
    // merge(this.email.statusChanges, this.email.valueChanges)
    //   .pipe(takeUntilDestroyed())
    //   .subscribe(() => this.updateErrorMessage());
  }

  ngOnInit(): void {
    this.prepareLoginForm();
  }

  prepareLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }
  updateErrorMessage() {
    // if (this.email.hasError('required')) {
    //   this.errorMessage = 'You must enter a value';
    // } else if (this.email.hasError('email')) {
    //   this.errorMessage = 'Not a valid email';
    // } else {
    //   this.errorMessage = '';
    // }
  }
}
