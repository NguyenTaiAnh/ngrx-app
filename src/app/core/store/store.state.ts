import { Product } from "./product/product.type";

export interface IProductState {
    products: Product[],
    loading:boolean,
    error:string
}