import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusInputComponent } from './cus-input.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ErrorMessagesComponent } from '../error-messages/error-messages.component';

describe('CusInputComponent', () => {
  let component: CusInputComponent;
  let fixture: ComponentFixture<CusInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusInputComponent);
    component = fixture.componentInstance;
    component.formGp = new FormGroup({
      testControl: new FormControl('')
    })
    component.formCtrlName = 'testControl';
    component.label = 'Test Label';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render the form with input fields', () => {
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   const emailInput = compiled.querySelector('input[formControlName="email"]');
  //   const pswInput = compiled.querySelector('input[formControlName="password"]');
  
  //   expect(emailInput).toBeTruthy();
  //   expect(pswInput).toBeTruthy();
  // });
  it ('should have error message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const errorMessageEl = compiled.querySelector('app-error-messages');
    expect(errorMessageEl).toBeTruthy();
  })
});
