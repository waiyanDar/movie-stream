import {getState, patchState, signalStore, withHooks, withMethods, withState} from "@ngrx/signals";
import {HttpClient} from "@angular/common/http";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {effect} from "@angular/core";

export const counterStore = signalStore(
    {providedIn: "root"},
    withState({count: 0}),
    withMethods(({ count, ...store }) => ({
        setCounter(c: number){
            patchState(store, {count: c});
        },
        increment() {
            patchState(store, { count: count() + 1 });
        },
        decrement(){
            patchState(store, { count: count() - 1});
        },
        reset(){
            patchState(store, { count : 0})
        },
        testOne : () => {
            patchState(store, {count: 100})
        }
    })),
    withHooks({
        onInit(store) {
            let temp = sessionStorage.getItem('test');
            if (temp !== null) {
                temp = JSON.parse(temp);
                if (temp !== null) {
                    store.setCounter(parseInt(temp))
                }
            }
        }
        // onDestroy(store){
        //     console.log(store.count())
        //
        //     sessionStorage.setItem('test', JSON.stringify(store.count()))
        // }
    })
);
