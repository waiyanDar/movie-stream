import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CommonState } from "../states/common.state";

export const commonStateFeatureSelector = createFeatureSelector<CommonState>('commonState');

export const selectStyle = createSelector(commonStateFeatureSelector, (state) => state.style);