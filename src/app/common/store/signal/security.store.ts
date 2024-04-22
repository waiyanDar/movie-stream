import {Role} from "../../models/user.model";
import {getState, patchState, signalState, signalStore, withHooks, withMethods, withState} from "@ngrx/signals";
import {effect, Injectable} from "@angular/core";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

export class LoginUser{
    id!: number;
    name!: string;
    role!: Role;

}

export interface LoginUserState {
    loginUser: LoginUser | undefined;
    error: any;
}

const initializeLoginUserState: LoginUserState = {
    loginUser: undefined,
    error: null
}
// export const LoginUserStore = signalStore(
//         {providedIn: "root"},
//         withState(initializeLoginUserState),
//         withMethods(({loginUser, ...state}) =>({
//             addLoginUser(user: LoginUser){
//                 patchState(state, {loginUser: user})
//             },
//             removeLoginUser(){
//                 patchState(state, {loginUser: undefined})
//             }
//         })),
//     );

@Injectable({
    providedIn: "root"
})

export class CounterStore {
    private state = signalState({count: 0});

    selectCount () {
        return this.state.count;
    }
    increment(){
        patchState(this.state, {count: this.state.count() + 1});
    }

    decrement(){
        patchState(this.state, {count: this.state.count() - 1});
    }

    reset(){
        patchState(this.state, {count: 0});
    }

    // async testLoad(){
    //     if (this.state.count === -1){
    //         patchState(this.state, {count: 100})
    //     }
    // }
}


