import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCounterState = createFeatureSelector<{count: number}>('counter');

export const selectCounter = createSelector(selectCounterState, (state)=> state)