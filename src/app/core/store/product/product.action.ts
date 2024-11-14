import {createAction, props} from "@ngrx/store";
import {Product} from "./product.type";

const LOAD_PRODUCT = '[Product Component] load product';
const LOAD_PRODUCT_SUCCESS = '[Product Component] load product success';
const LOAD_PRODUCT_FAILED = '[Product Component] load product failed';
const ADD_PRODUCT = '[Product Component] add product';
const UPDATE_PRODUCT = '[Product Component] update product';
const DELETE_PRODUCT = '[Product Component] delete product';

export const productLoad = createAction(LOAD_PRODUCT)
export const productLoadSuccess = createAction(LOAD_PRODUCT_SUCCESS, props<{ products: Product[] }>())
export const productLoadFailed = createAction(LOAD_PRODUCT_FAILED, props<{ error: string }>())


// Add Product
export const addProduct = createAction('[Products] Add Product', props<{ product: Product }>());
export const addProductSuccess = createAction('[Products] Add Product Success', props<{ product: Product }>());
export const addProductFailure = createAction('[Products] Add Product Failure', props<{ error: string }>());

// Delete Product
export const deleteProduct = createAction('[Products] Delete Product', props<{ productId: string }>());
export const deleteProductSuccess = createAction('[Products] Delete Product Success', props<{ productId: string }>());
export const deleteProductFailure = createAction('[Products] Delete Product Failure', props<{ error: string }>());

// Update Product
export const updateProduct = createAction('[Products] Update Product', props<{
  productId: string,
  product: Product
}>());
export const updateProductSuccess = createAction('[Products] Update Product Success', props<{
  product: Product
}>());
export const updateProductFailure = createAction('[Products] Update Product Failure', props<{ error: string }>());

