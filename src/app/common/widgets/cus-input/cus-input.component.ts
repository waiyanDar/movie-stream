import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cus-input',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './cus-input.component.html',
  styleUrl: './cus-input.component.scss'
})
export class CusInputComponent implements OnInit {

  @Input() formGp!: any;
  @Input() formCtrlName!: any;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() type: 'text' | 'password' | 'email' = 'text';

  ngOnInit(){    
  }

  get invalidAndTouched(){
    return this.formGp.get(this.formCtrlName)?.invalid && this.formGp.get(this.formCtrlName)?.touched
  }
}
