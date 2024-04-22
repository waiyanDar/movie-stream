import {createReducer} from "@ngrx/store";
import {initializeUserState} from "../states/user.state";

export const userReducers = createReducer(
    initializeUserState
)
