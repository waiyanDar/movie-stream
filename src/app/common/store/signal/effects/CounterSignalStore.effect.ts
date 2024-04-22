import {effect, inject, Injectable} from "@angular/core";
import {getState} from "@ngrx/signals";
import {counterStore} from "../stores/CounterStore";
import {CommonService} from "../../../services/common.service";
import {map, take} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CounterSignalStoreEffect{
    private counterStore = inject(counterStore);
    private commonService = inject(CommonService);

    constructor() {
        effect(() =>{
            const state = getState(this.counterStore);
            if (state.count === -2){
                // this.counterStore.testOne();
                this.commonService.loadCount().pipe(take(1)).subscribe(count => {
                    console.log(count.count);
                    this.counterStore.setCounter(count.count);
                })
            }
        }, {allowSignalWrites: true})
    }
}
