import {Injectable} from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as ProductAction from './product.action';
import {catchError, map, mergeMap, of} from 'rxjs';

@Injectable()
export class ProductEffects {
  constructor(
    private action$: Actions,
    private _productService: ProductService
  ) {
  }

  loadProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductAction.productLoad),
      mergeMap(() =>
        this._productService.getProducts().pipe(
          map((products: any) => products.map((p: any) => ({
            id: p._id,
            name: p.name, price: p.price, image: p.image, description: p.description
          }))),
          map((products) => {
            return ProductAction.productLoadSuccess({products});
          }),
          catchError((error) => of(ProductAction.productLoadFailed(error)))
        )
      )
    )
  );
  addProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductAction.addProduct),
      mergeMap(({product}) =>
        this._productService.addProduct(product).pipe(
          map((p: any) => ({
            id: p._id,
            name: p.name, price: p.price, image: p.image, description: p.description
          })),
          map((newProduct) =>
            ProductAction.addProductSuccess({product: newProduct})
          ),
          catchError((error) => of(ProductAction.addProductFailure(error)))
        )
      )
    )
  );
  deleteProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductAction.deleteProduct),
      mergeMap(({productId}) =>
        this._productService.deleteProduct((productId)).pipe(
          map(() => ProductAction.deleteProductSuccess({productId})),
          catchError((error: string) => of(ProductAction.deleteProductFailure({error})))
        )),
    ))

  updateProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(ProductAction.updateProduct),
      mergeMap(({productId, product}) => this._productService.updateProduct(productId, product)),
      map((p: any) => ({
        id: p._id,
        name: p.name, price: p.price, image: p.image, description: p.description
      })),
      map((product) => ProductAction.updateProductSuccess({product})),
      catchError(error => of(ProductAction.updateProductFailure({error})))
    ))
}
