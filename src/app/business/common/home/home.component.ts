import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxEditorComponent } from '../../../common/widgets/ngx-editor/ngx-editor.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Uppercase } from '../todo';
import { SignalTestComponent } from '../signal-test/signal-test.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgxEditorComponent, ReactiveFormsModule, Uppercase, SignalTestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

   boundMapUrl !: SafeResourceUrl;
  testMapUrl = "<iframe src=\"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15271.76694441648!2d96.16330505!3d16.8787765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2smm!4v1724079738844!5m2!1sen!2smm\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
  testing : string = "hello";

  testForm !: FormGroup;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.testForm = this.fb.group({
      'test': [this.testing, [Validators.required]],
      'test1': ['testing1'],
      'test2': ['testing2'],
      'test3': [{value: 'testing3', disabled: true}],

    })
    this.prepareUrl();
  }
  submitTesting(){
    console.log(this.testForm.value);
    
  }
  prepareUrl(){
    const match = this.testMapUrl.match(/src="([^"]+)/);
    const url = match ? match[1] : '';
    this.boundMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log('url : ', this.boundMapUrl);
  }
}

class Testing {
  tstingName !: string;
  testingAge !: number;
}
