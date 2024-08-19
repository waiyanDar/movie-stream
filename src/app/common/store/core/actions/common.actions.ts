import { createAction, props } from "@ngrx/store";
import { Style } from "../../../models/style.model";

export const addStyle = createAction(
    'add background ', props<{style: Style}>()
)