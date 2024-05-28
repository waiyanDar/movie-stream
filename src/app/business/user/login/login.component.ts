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
import { buttonAnimation, paneChangeAnimation, slideInOutAnimation, testAnimation, testAnimation1, translateAnimation } from '../../../common/animations/animation';

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
    translateAnimation, paneChangeAnimation, buttonAnimation
  ]
})
export class LoginComponent implements OnInit {

  nameAndEmailForm !: FormGroup;
  passwordForm !: FormGroup;
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
      this.nameAndEmailForm =  this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required]],
      });
      this.passwordForm = this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      });
    // } else {
    //   this.signForm = this.fb.group({
    //     email: ['', [Validators.required, Validators.email]],
    //     password: ['', [Validators.required]]
    //   });
    // }
    
  }

  checkDuplication(event: any){
    mustDuplicate('password', event, this.nameAndEmailForm);
}


  signInOrUp(){
    if (this.nameAndEmailForm.valid){
      if (this.loginOrNot){
        const tempLogIn = this.nameAndEmailForm.value;
        let enc = this.encryptService.encryptAES(tempLogIn['email'])
        let dec = this.encryptService.decryptAES(enc);

        let encV2 = this.encryptService.encryptAESV2(tempLogIn['email'])
        let decV2 = this.encryptService.decryptAESV2(encV2);
        
      }else{
        const tempSignUp = this.nameAndEmailForm.value;        
      }
    }else{   
      checkNestedControlAndMarkAsDirty(this.nameAndEmailForm);
    }
  }

  protected activePane = signal(0);

  // protected form = new FormGroup<SignUpForm>({
  //   email: new FormControl<string>('', { nonNullable: true, validators: Validators.required })
  // });

  setActiveStep() {
    if (this.activePane() === 0 && this.nameAndEmailForm.valid) {
      this.activePane.set(1);
    }else if (this.activePane() === 1 ){
      this.activePane.set(0);
    }
      checkNestedControlAndMarkAsDirty(this.nameAndEmailForm);
  }

  setSignUpStep(){
    if (this.passwordForm.valid){

    }else{
      checkNestedControlAndMarkAsDirty(this.passwordForm);
    }
  }
}
