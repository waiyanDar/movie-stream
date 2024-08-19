import { Component, OnInit, signal } from '@angular/core';
import { Validators, ReactiveFormsModule, FormGroup, NonNullableFormBuilder, FormControl, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { checkNestedControlAndMarkAsDirty, mustDuplicate } from '../../../common/functions/common.funtion';
import { EncryptDecrpytService } from '../../../common/services/encrypt.decrypt.service';
import { CusInputComponent } from '../../../common/widgets/cus-input/cus-input.component';
import { buttonAnimation, paneChangeAnimation, translateAnimation } from '../../../common/animations/animation';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
    ReactiveFormsModule,
    CusInputComponent
  ],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss',
  animations: [
    translateAnimation, paneChangeAnimation, buttonAnimation
  ]
})
export class SignComponent implements OnInit {

  nameAndEmailForm !: FormGroup;
  passwordForm !: FormGroup;
  emailAndPasswordForm !: FormGroup;
  errorMessage = '';

  protected activePane = signal(0);

test = {
    "id": 1115,
    "type": "Labelling",
    "code": "LBL_US_INDICIA",
    "description": "US citizen identification",
    "value": "<ul class=\"custom-list\"><li>Identification as a US citizen or resident</li><li>US registered address or mailing address or post office box</li><li>US telephone number</li><li>Standing instructions to pay amounts from the account to an account maintained in the US</li><li>Current power of attorney or signatory authority granted to a person with a US address</li><li>An 'in-care-of' address or ''hold mail'' address that is the sole address the Foreign Financial Institution (FFI) has identified for your company</li></ul>"
}

  constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private encryptService: EncryptDecrpytService
  ) { }

  ngOnInit(): void {
    this.prepareForm();
    this.isSignin ? this.activePane.set(2) : this.activePane.set(0);
  }

  get isSignin() {
    return this.router.url.includes('signin');
  }

  chageTesting(newClassName: string) {
    let stringContent = this.test.value;

    let modifiedContent = stringContent.replace(/class="[^"]*"/g, `class="${newClassName}"`);

    this.test.value = modifiedContent;

    console.log('Modified test object: ', this.test);
}


  prepareForm() {
    this.chageTesting("testing");
    if (!this.isSignin) {
      this.nameAndEmailForm =  this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        name: ['', [Validators.required]],
      });
      this.passwordForm = this.fb.group({
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      });
    } else {
      this.emailAndPasswordForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });      
    }
    
  }

  checkDuplication(event: any){
    mustDuplicate('password', event, this.nameAndEmailForm);
}


  signInOrUp(){
    if (this.nameAndEmailForm.valid){
      if (this.isSignin){
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

  setActiveStep() {
      if (this.activePane() === 0 && this.nameAndEmailForm.valid ) {
        this.activePane.set(1);
        checkNestedControlAndMarkAsDirty(this.nameAndEmailForm);
      }else if (this.activePane() === 1 ){
        this.activePane.set(0);
      }else if (this.activePane() === 2 && this.isSignin){
        this.emailAndPasswordForm.valid ? this.router.navigateByUrl('/home') : checkNestedControlAndMarkAsDirty(this.emailAndPasswordForm);     
      }
  }

  setSignUpStep(){
    if (this.passwordForm.valid){

    }else{
      checkNestedControlAndMarkAsDirty(this.passwordForm);
    }
  }
}
