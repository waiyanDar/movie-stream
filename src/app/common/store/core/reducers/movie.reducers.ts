import {createReducer} from "@ngrx/store";
import {initializeMovieState} from "../states/movie.state";

export const movieReducers = createReducer(
    initializeMovieState
)
