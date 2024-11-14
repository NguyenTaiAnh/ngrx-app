import {Injectable} from "@angular/core";
import {delay, Observable, of} from "rxjs";
import {Product} from "../../store/product/product.type";
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  apiBasePath = environment.apiUrl + "/products"

  constructor(
    private _http: HttpClient
  ) {
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.apiBasePath)
  }

  addProduct(product: Product): Observable<Product> {
    return this._http.post<Product>(this.apiBasePath, product)
  }

  deleteProduct(productId: string): Observable<Product> {
    return this._http.delete<Product>(this.apiBasePath + "/" + productId)
  }

  updateProduct(productId: string, product: Product): Observable<Product> {
    return this._http.put<Product>(this.apiBasePath + "/" + productId, product)
  }

  getProduct() {
  }

}
