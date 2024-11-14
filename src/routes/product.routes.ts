import {Routes} from "@angular/router";
import {ProductPage} from "../app/UI/product/product.page";

export const ProductRoutes: Routes = [
  {
    path: '',
    component: ProductPage,
    data: {breadcrumb: 'Products'}
  }
]
