import { createReducer, on } from '@ngrx/store';
import { IProductState } from '../store.state';
import * as ProductAction from './product.action';
export const initialProduct: IProductState = {
  products: [],
  loading: false,
  error: '',
};

export const ProductReducer = createReducer(
  initialProduct,
  on(ProductAction.productLoad, (state) => ({ ...state, loading: true })),
  on(ProductAction.productLoadSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(ProductAction.productLoadFailed, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(ProductAction.addProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(ProductAction.deleteProductSuccess, (state, { productId }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== productId),
  })),
  on(ProductAction.updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map((p) => (p.id === product.id ? product : p)),
  }))
);
