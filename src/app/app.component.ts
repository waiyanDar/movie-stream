import {Component, HostListener, inject, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {counterStore} from "./common/store/signal/stores/CounterStore";
import { routeAnimations } from './common/animations/animation';
import { NavComponent } from './business/common/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  animations: [routeAnimations]
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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
