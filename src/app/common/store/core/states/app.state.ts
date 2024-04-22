import {MovieState} from "./movie.state";
import {UserState} from "./user.state";
import {ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {movieReducers} from "../reducers/movie.reducers";
import {userReducers} from "../reducers/user.reducers";
import {LocalStorageConfig, localStorageSync} from "ngrx-store-localstorage";

export interface AppState {
    movieState: MovieState;
    userState: UserState;
}

const config: LocalStorageConfig = {
    rehydrate: true,
    storage: localStorage,
    removeOnUndefined: false,
    keys: ['userState', 'movieState']
}

export const storageSyncReducer: MetaReducer =
    (reducer: ActionReducer<any, any>) => localStorageSync({...config, storage: sessionStorage})(reducer);

export const appReducers: ActionReducerMap<AppState> = {
    movieState: movieReducers,
    userState: userReducers
}

export const metaReducers: MetaReducer<any, any> [] = [storageSyncReducer];
