import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-error-messages',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './error-messages.component.html',
  styleUrl: './error-messages.component.scss'
})
export class ErrorMessagesComponent {

  @Input() formGp !: FormGroup;
  @Input() formCtrlName !: any;
  @Input() label !: string;
}
