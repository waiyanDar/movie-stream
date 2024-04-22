import {Component, inject} from '@angular/core';
import {counterStore} from "../../../common/store/signal/stores/CounterStore";

@Component({
    selector: 'app-signal-child',
    standalone: true,
    imports: [],
    templateUrl: './signal.child.component.html',
    styleUrl: './signal.child.component.scss'
})
export class SignalChildComponent{
    counterTest = inject(counterStore);

    constructor() {
        // effect(() => {
        //     const state = getState(this.counterTest);
        //     if (state.count === 0 ){
        //         this.counterTest.testOne();
        //     }
        //     if (state.count === 5){
        //         // this.counterTest.testOne();'
        //     }
        // }, {allowSignalWrites: true})
    }
}
