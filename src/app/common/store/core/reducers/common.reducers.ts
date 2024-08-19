import {createReducer, on} from "@ngrx/store";
import { initializeCommonState } from "../states/common.state";
import { addStyle } from "../actions/common.actions";

export const commonReducers = createReducer(
    initializeCommonState, 
    on(addStyle, (state, action) => {
        return {...state, style: action.style}
    })
)
