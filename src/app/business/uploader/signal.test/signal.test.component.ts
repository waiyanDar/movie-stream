import {Component, inject} from '@angular/core';
import {SignalChildComponent} from "../signal.child/signal.child.component";
import {RouterLink} from "@angular/router";
import {counterStore} from "../../../common/store/signal/stores/CounterStore";

@Component({
  selector: 'app-signal-test',
  standalone: true,
  imports: [SignalChildComponent, RouterLink],
  templateUrl: './signal.test.component.html',
  styleUrl: './signal.test.component.scss'
})
export class SignalTestComponent {

  testSignal = inject(counterStore);

  increment(){
    this.testSignal.increment();
  }
  decrement(){
    this.testSignal.decrement();
  }
  reset(){
    this.testSignal.reset();
  }
}
