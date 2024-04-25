import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FirstCapital } from '../../pipes/first.capital.pipe';

@Component({
  selector: 'app-cus-mat-input',
  standalone: true,
  imports: [
    MatError, 
    MatLabel, 
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    MatButtonModule,
    ReactiveFormsModule,
    FirstCapital
  ],
  templateUrl: './cus-mat-input.component.html',
  styleUrl: './cus-mat-input.component.scss'
})
export class CusMatInputComponent implements OnInit{

  @Input()
  formG ?: any;

  @Input()
  formCN ?: any;

  @Input()
  label ?: string;

  @Input()
  className ?: any;

  @Input()
  numberOnly ?: boolean;

  @Input()
  upperCase ?: boolean;

  @Input()
  showEye ?: boolean;

  @Input()
  makeFirstCharUpper ?: boolean;

  hide ?: boolean = true;

  @Output()
  blurEvent = new EventEmitter<string>();

  onBlur(){
    this.blurEvent.emit(this.formCN);
  }

  ngOnInit(): void {
  }
}
