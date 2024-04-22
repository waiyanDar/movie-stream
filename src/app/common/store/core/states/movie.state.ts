import {Movie} from "../../../models/movie.model";
import {Cast} from "../../../models/cast.model";
import {Category} from "../../../models/category.model";
import {Position} from "../../../models/position.model";

export interface MovieState {
    movies: Movie[];
    casts: Cast[];
    categories: Category[];
    positions: Position[];
    error: any;
}

export const initializeMovieState: MovieState = {
    movies: [],
    casts: [],
    categories: [],
    positions: [],
    error: null
}
