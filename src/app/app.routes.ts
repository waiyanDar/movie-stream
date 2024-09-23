import { Routes } from '@angular/router';
import {SignalTestComponent} from "./business/uploader/signal.test/signal.test.component";
import {TestingComponent} from "./business/uploader/testing/testing.component";
import { SignComponent } from './business/user/sign/sign.component';
import { HomeComponent } from './business/common/home/home.component';
import { TestComponent } from './business/user/test/test.component';
import { authGuard } from './guards/auth.guard';
import { ErrorComponent } from './common/widgets/error/error.component';
import { FileUploadComponent } from './business/uploader/file-upload/file-upload.component';

export const routes: Routes = [
    {
        path: 'uploader', children : [
            {path: 'signal', component: SignalTestComponent},
            {path: 'testing', component: TestingComponent}
        ], canActivate: [authGuard]},
    {
        path: 'public', children: [
            
        ]
    },
    {path: 'signin', component: SignComponent},
    {path: 'signup', component: SignComponent, canActivate: [authGuard], data: { expectedRole: 'admin'}},
    {path: 'home', component: HomeComponent},
    {path: 'test', component: TestComponent},
    {path: 'file', component: FileUploadComponent},
    {path: 'sorry/:errorCode', component: ErrorComponent },//for path variable
    {path: 'sorry', component: ErrorComponent },//for param
    {path: "**", redirectTo: '/home'},

];
