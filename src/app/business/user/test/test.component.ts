import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AppState } from '../../../common/store/core/states/app.state';
import { selectStyle } from '../../../common/store/core/selectors/common.selector';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [TranslateModule, FormsModule, CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  backgroundColor: string = '#fff'; // Default background color
  fontColor: string = '';
  constructor(public translate: TranslateService, private store: Store<AppState>) {
    translate.setDefaultLang('en');
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
}
