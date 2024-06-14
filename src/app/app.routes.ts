import { Routes } from '@angular/router';
import {SignalTestComponent} from "./business/uploader/signal.test/signal.test.component";
import {TestingComponent} from "./business/uploader/testing/testing.component";
import { SignComponent } from './business/user/sign/sign.component';
import { HomeComponent } from './business/common/home/home.component';

export const routes: Routes = [
    {
        path: 'uploader', children : [
            {path: 'signal', component: SignalTestComponent},
            {path: 'testing', component: TestingComponent}
        ]},
    {
        path: 'public', children: [
            
        ]
    },
    {path: 'signin', component: SignComponent},
    {path: 'signup', component: SignComponent},
    {path: 'home', component: HomeComponent},
    {path: "**", redirectTo: '/home'},

];
