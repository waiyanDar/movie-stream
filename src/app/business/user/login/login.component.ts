import { Component, OnInit, signal } from '@angular/core';
import { Validators, ReactiveFormsModule, FormGroup, NonNullableFormBuilder, FormControl, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CusMatInputComponent } from '../../../common/widgets/cus-mat-input/cus-mat-input.component';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { checkNestedControlAndMarkAsDirty, mustDuplicate } from '../../../common/functions/common.funtion';
import { take } from 'rxjs';
import { EncryptDecrpytService } from '../../../common/services/encrypt.decrypt.service';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { CusInputComponent } from '../../../common/widgets/cus-input/cus-input.component';
import { slideInOutAnimation, testAnimation, testAnimation1 } from '../../../common/animations/animation';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    CusInputComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  animations: [
    testAnimation, testAnimation1
  ]
})
export class LoginComponent implements OnInit {

  signForm !: FormGroup;
  errorMessage = '';

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private encryptService: EncryptDecrpytService
  ) { }

  ngOnInit(): void {
    this.prepareForm();
  }

  get loginOrNot() {
    return this.router.url.includes('login');
  }

  prepareForm() {
    // if (!this.loginOrNot) {
      this.signForm =  this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      });
    // } else {
    //   this.signForm = this.fb.group({
    //     email: ['', [Validators.required, Validators.email]],
    //     password: ['', [Validators.required]]
    //   });
    // }
    console.log(this.signForm);
    
  }

  checkDuplication(event: any){
    mustDuplicate('password', event, this.signForm);
}


  signInOrUp(){
    if (this.signForm.valid){
      if (this.loginOrNot){
        const tempLogIn = this.signForm.value;
        let enc = this.encryptService.encryptAES(tempLogIn['email'])
        let dec = this.encryptService.decryptAES(enc);

        let encV2 = this.encryptService.encryptAESV2(tempLogIn['email'])
        let decV2 = this.encryptService.decryptAESV2(encV2);
        
      }else{
        const tempSignUp = this.signForm.value;        
      }
    }else{   
      checkNestedControlAndMarkAsDirty(this.signForm);
    }
  }

  protected activePane = signal(0);

  // protected form = new FormGroup<SignUpForm>({
  //   email: new FormControl<string>('', { nonNullable: true, validators: Validators.required })
  // });

  setActiveStep() {
    if (this.activePane() === 0 && this.signForm.get('name')?.valid && this.signForm.get('email')?.valid) {
      this.activePane.set(1);
    }else if (this.activePane() === 1 && this.signForm.get('password')?.valid && this.signForm.get('confirmPassword')?.valid){
      this.activePane.set(0);
    }else{
      checkNestedControlAndMarkAsDirty(this.signForm);
    }
    
  }
}
