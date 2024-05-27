import { Component, EventEmitter, Output } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [LoginComponent, A11yModule ],
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
  @Output() modalClose = new EventEmitter<void>();
  
}
