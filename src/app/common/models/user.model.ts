import {History} from "./history.model";

export interface User {
    id: number;
    name: string;
    role: Role;

    history: History;
}

export enum Role {
    RegularUser = "RegularUser",
    Uploader = "Uploader",
    Admin = "Admin"

}

export interface CountModel {
    count: number
}
