import { Role } from "../../../models/user.model";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

export class LoginUser {
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
export const LoginUserStore = signalStore(
    { providedIn: "root" },
    withState(initializeLoginUserState),
    withMethods(({ loginUser, ...state }) => ({
        addLoginUser(user: LoginUser) {
            patchState(state, { loginUser: user })
        },
        removeLoginUser() {
            patchState(state, { loginUser: undefined })
        }
    })),
);
