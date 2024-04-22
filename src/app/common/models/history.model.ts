import {Movie} from "./movie.model";

export interface History {
    id: string;
    movie: Movie;
    action: Action;
    actionDate: Date;
}

export enum Action {
    Watched = "Watched",
    Uploaded = "Uploaded",
    Checked = "Checked",
    Deleted = "Deleted",
}
