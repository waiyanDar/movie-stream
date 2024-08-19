import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Style } from '../../../common/models/style.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../common/store/core/states/app.state';
import { selectStyle } from '../../../common/store/core/selectors/common.selector';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit{
  // style!: Style;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store.select(selectStyle).subscribe(style => {
      if (style) {
        // this.style = style
      }
    });
    
  }
}
