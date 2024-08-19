import {MovieState} from "./movie.state";
import {UserState} from "./user.state";
import {ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {movieReducers} from "../reducers/movie.reducers";
import {userReducers} from "../reducers/user.reducers";
import {LocalStorageConfig, localStorageSync} from "ngrx-store-localstorage";
import { CommonState } from "./common.state";
import { commonReducers } from "../reducers/common.reducers";

export interface AppState {
    movieState: MovieState;
    userState: UserState;
    commonState: CommonState;
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
    userState: userReducers, 
    commonState: commonReducers
}

export const metaReducers: MetaReducer<any, any> [] = [storageSyncReducer];
