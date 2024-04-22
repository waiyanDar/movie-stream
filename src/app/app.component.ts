import {Component, HostListener, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {counterStore} from "./common/store/signal/stores/CounterStore";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'movie-store';
  counterTest = inject(counterStore);
  constructor() {}
  ngOnInit() {}
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: Event) {
    sessionStorage.setItem('test', JSON.stringify(this.counterTest.count()));
  }
}
