import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProductState } from "../store.state";

export const selectProductState = createFeatureSelector<IProductState>('product');

export const selectProduct = createSelector(selectProductState,(state)=>state.products);
export const selectProductLoading = createSelector(selectProductState, (state)=>state.loading)
export const selectProductFailed = createSelector(selectProductState, (state)=>state.error)
