import { Routes } from '@angular/router';
import {SignalTestComponent} from "./business/uploader/signal.test/signal.test.component";
import {TestingComponent} from "./business/uploader/testing/testing.component";

export const routes: Routes = [
    {path: 'uploader', children : [
            {path: 'signal', component: SignalTestComponent},
            {path: 'testing', component: TestingComponent}
        ]},
    {path: "**", redirectTo: '/uploader/testing'},

];
