import { Style } from "../../../models/style.model"

export interface CommonState{
    style: Style | null
}

export const initializeCommonState: CommonState ={
    style: null
}