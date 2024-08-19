import { NgClass } from '@angular/common';
import { Component, Input, input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Editor, NgxEditorModule, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-ngx-editor',
  standalone: true,
  imports: [ReactiveFormsModule, NgxEditorModule, NgClass],
  templateUrl: './ngx-editor.component.html',
  styleUrl: './ngx-editor.component.scss'
})
export class NgxEditorComponent implements OnInit, OnDestroy{

  @Input() formGp !: FormGroup;

  @Input() formCtrlName !: any;

  @Input() label !: string;

  editor !: Editor;
  toolbar : Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{heading: ['h1','h2', 'h3', 'h4', 'h5', 'h6']}],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify']
  ]

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  get invalidAndTouched(){
    return this.formGp.get(this.formCtrlName)?.invalid && this.formGp.get(this.formCtrlName)?.touched
  }

}
