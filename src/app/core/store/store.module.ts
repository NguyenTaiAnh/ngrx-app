import { counterReducer } from "./counter/counter.reducer";
import { ProductReducer } from "./product/product.reducer";

export const storeModule ={
    product: ProductReducer,
    counter: counterReducer
}