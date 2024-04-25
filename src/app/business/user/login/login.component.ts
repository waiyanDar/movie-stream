import { Component, OnInit } from '@angular/core';
import { Validators, ReactiveFormsModule, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CusMatInputComponent } from '../../../common/widgets/cus-mat-input/cus-mat-input.component';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { markAllControlsAsTouched, mustDuplicate } from '../../../common/functions/common.funtion';
import { take } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CusMatInputComponent,
    MatCardModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  signForm !: FormGroup;
  errorMessage = '';

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.prepareForm();
  }

  get loginOrNot() {
    return this.router.url.includes('login');
  }

  prepareForm() {
    if (!this.loginOrNot) {
      this.signForm =  this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      });
    } else {
      this.signForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
    }
  }

  checkDuplication(event: any){
    mustDuplicate('password', event, this.signForm);    
    // if (!this.loginOrNot){
    //   let password = this.signForm.get('password');
    //   let confirmPassword = this.signForm.get('confirmPassword');
    //   if (password?.value !== confirmPassword?.value){
    //     if (confirmPassword?.valid){        
    //       confirmPassword?.setErrors({'pswNotSame': true});
    //   }

    //     console.log("not same");
    //   } else {
    //     confirmPassword?.setErrors(null); 
    //     confirmPassword?.clearValidators(); 
    //   }
    //   confirmPassword?.updateValueAndValidity();
    // }
}


  signInOrUp(){
    if (this.signForm.valid){
      if (this.loginOrNot){
        const tempLogIn = this.signForm.value;
        console.log(tempLogIn);
        
      }else{
        const tempSignUp = this.signForm.value;
        console.log(tempSignUp);
        
      }
    }else{   
      markAllControlsAsTouched(this.signForm);
    }
  }
}
