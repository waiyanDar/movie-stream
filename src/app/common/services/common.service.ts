import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CountModel} from "../models/user.model";
import { LoginUser } from "../store/signal/stores/security.store";
import { SignupModel } from "../models/sign.up.model";

@Injectable({
    providedIn: "root"
})
export class CommonService{
    private httpClient = inject(HttpClient);

    public loadCount(){
        return this.httpClient.get<CountModel>('/assets/test.json')
    }

    public signUp(signUpUser: SignupModel){
        return this.httpClient.post<LoginUser>('', signUpUser);
    }
}
