import { Routes } from '@angular/router';
import {SignalTestComponent} from "./business/uploader/signal.test/signal.test.component";
import {TestingComponent} from "./business/uploader/testing/testing.component";
import { LoginComponent } from './business/user/login/login.component';

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
    {path: 'login', component: LoginComponent},
    {path: "**", redirectTo: '/uploader/testing'},

];
