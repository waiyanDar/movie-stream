import {User} from "../../../models/user.model";

export interface UserState {
    users: User[];
    error: any;
}

export const initializeUserState: UserState = {
    users: [],
    error: null
}
