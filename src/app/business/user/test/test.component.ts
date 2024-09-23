import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AppState } from '../../../common/store/core/states/app.state';
import { selectStyle } from '../../../common/store/core/selectors/common.selector';
import {OpenCloseComponent} from "../../uploader/open-close/open-close.component";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule, ReactiveFormsModule, OpenCloseComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  backgroundColor: string = '#fff'; // Default background color
  fontColor: string = '';
  fileForm: FormGroup;

  constructor(public translate: TranslateService, private store: Store<AppState>, private fb: FormBuilder) {
    translate.setDefaultLang('en');
    this.fileForm = this.fb.group({
      file: [
        null,
        [
          Validators.required
        ],
      ],
    });
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
    this.translate.addLangs(['en', 'fr', 'vi']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|fr|vi/) ? browserLang : 'en');

    this.store.select(selectStyle).subscribe(style => {
      if (style){
        this.backgroundColor = style?.backgound;
        this.fontColor = style.font;
      }
    })
  }
  colors = [
    'cyan', 'green', 'red', 'yellow', 'blue', 'purple', 'orange', 'pink',
    'brown', 'grey', 'black', 'white', 'lime', 'magenta', 'navy', 'teal',
    'aqua', 'fuchsia', 'maroon', 'olive', 'silver', 'gold', 'indigo', 'violet'
  ];
  color1 = 'cyan';
  color2 = 'green';
  gradientBackground = `linear-gradient(45deg, ${this.color1}, ${this.color2})`;

  updateGradient() {
    this.gradientBackground = `linear-gradient(45deg, ${this.color1}, ${this.color2})`;
  }



  fileTypeValidator(allowedTypes: string[]) {
    return (control: AbstractControl) => {
      console.log('control:', control);
      const file = control.value;
      if (file) {
        console.log('file.type:', file.type);

        const fileType = file.type;
        if (allowedTypes.indexOf(fileType) === -1) {
          return { fileType: true };
        }
      }
      return null;
    };
  }


  fileSizeValidator(maxSize: number) {
    return (control: any) => {
      const file = control.value;
      if (file) {
        const fileSize = file.size;
        if (fileSize > maxSize) {
          return { fileSize: true };
        }
      }
      return null;
    };
  }

  onFileSelect(event: any, control: any) {
    const allowedTypes = ['image/jpeg', 'image/png'];
    const file = event.target.files[0];
    if (file) {
        const fileType = file.type;
        if (allowedTypes.indexOf(fileType) === -1) {
          this.fileForm.get(control)?.setErrors({'fileType': true})
        }else{

        }
      }
      console.log(file);
      this.fileForm.get('file')!.updateValueAndValidity();
  }

  onSubmit() {
    if (this.fileForm.valid) {
      console.log('File:', this.fileForm.value.file);
    }
  }
}
