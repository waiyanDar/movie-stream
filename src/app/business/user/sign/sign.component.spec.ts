import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignComponent } from './sign.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: SignComponent;
  let fixture: ComponentFixture<SignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignComponent, ReactiveFormsModule],
      // declarations: [SignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with username and password fields', () => {
    const form = component.emailAndPasswordForm;
    expect(form).toBeTruthy();
    expect(form.contains('email')).toBeTruthy();
    expect(form.contains('password')).toBeTruthy();
  });

  it('should make all controls required', () => {
    const controls = component.emailAndPasswordForm.controls;
  
    Object.values(controls).forEach(control => {
      control.setValue('');
      expect(control.valid).toBeFalsy();
    });
  });
  

  it('should submit the form when valid', () => {
    spyOn(console, 'log');
    component.emailAndPasswordForm.setValue({ email: 'johndoe@gmail.com', password: 30 });
    component.onSubmit();

    expect(console.log).toHaveBeenCalledWith({ email: 'johndoe@gmail.com', password: 30 });
  });

  it('should not submit the form when invalid', () => {
    spyOn(console, 'log');

    component.emailAndPasswordForm.setValue({ email: '', password: 30 });
    component.onSubmit();

    expect(console.log).not.toHaveBeenCalled();
  });

  it('should render the form with input fields', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const emailInputComponent = compiled.querySelector('app-cus-input[formCtrlName="email"]');
    const pswInputComponent = compiled.querySelector('app-cus-input[formCtrlName="password"]');
  
    expect(emailInputComponent).toBeTruthy();
    expect(pswInputComponent).toBeTruthy();
  });
});
