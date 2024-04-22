import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CountModel} from "../models/user.model";

@Injectable({
    providedIn: "root"
})
export class CommonService{
    private httpClient = inject(HttpClient);

    public loadCount(){
        return this.httpClient.get<CountModel>('/assets/test.json')
    }
}
