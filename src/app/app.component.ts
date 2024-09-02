import {Component, HostListener, inject, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {counterStore} from "./common/store/signal/stores/CounterStore";
import { routeAnimations } from './common/animations/animation';
import { NavComponent } from './business/common/nav/nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from './common/store/core/states/app.state';
import { addStyle } from './common/store/core/actions/common.actions';
import { Style } from './common/models/style.model';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  animations: [routeAnimations]
})
export class AppComponent implements OnInit{
  title = 'movie-store';
  counterTest = inject(counterStore);
  deviceInfo !: DeviceInfo;
  userDeviceData !: string;

  constructor(private store: Store<AppState>, 
              private deviceService: DeviceDetectorService) {}

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: Event) {
    sessionStorage.setItem('test', JSON.stringify(this.counterTest.count()));
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  colors = [
    'cyan', 'green', 'red', 'yellow', 'blue', 'purple', 'orange', 'pink', 
    'brown', 'grey', 'black', 'white', 'lime', 'magenta', 'navy', 'teal', 
    'aqua', 'fuchsia', 'maroon', 'olive', 'silver', 'gold', 'indigo', 'violet'
  ];
  color1 = 'cyan';
  color2 = 'green';
  fontColor = 'black';
  gradientBackground = `linear-gradient(45deg, ${this.color1}, ${this.color2})`;

  updateGradient() {
    this.gradientBackground = `linear-gradient(45deg, ${this.color1}, ${this.color2})`;
    document.body.style.background = this.gradientBackground;
    this.addStyleToStore();
  }

  ngOnInit() {
    // Initialize with default gradient
    // document.body.style.background = this.gradientBackground;
    // this.addStyleToStore();
    this.userDeviceData = navigator.userAgent;
    this.deviceInfo = this.deviceService.getDeviceInfo();
    console.log('device info : ', this.deviceInfo);
    
  }

  addStyleToStore(){
    const tempStyle : Style = {
      backgound: this.gradientBackground,
      font: this.fontColor
    }
    this.store.dispatch(addStyle({style: tempStyle}))
  }
}
