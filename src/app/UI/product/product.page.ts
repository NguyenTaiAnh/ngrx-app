import {CommonModule} from "@angular/common";
import {Component, Injector, OnInit, ViewChild} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as ProductSelectors from "../../core/store/product/product.selector"
import * as ProductActions from "../../core/store/product/product.action"
import {Product} from "../../core/store/product/product.type";
import {selectCounter} from "../../core/store/counter/counter.selector";
import * as CountActions from "../../core/store/counter/counter.actions";
import {FormComponent} from "./form/form.component";
import {HighlightDirective} from "../../shared/directives/highlight/highlight.directive";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTypographyComponent} from "ng-zorro-antd/typography";
import {ModalComponent} from "../../shared/components/modal/modal.component";

import {NzModalModule, NzModalService} from "ng-zorro-antd/modal";

type typeEmitValue = {
  id: string,
  form: Product
}

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
  imports: [CommonModule, FormComponent, HighlightDirective, NzCardModule, NzGridModule, NzButtonModule, NzTypographyComponent, ModalComponent, NzModalModule]
})

export class ProductPage implements OnInit {
  loading$: Observable<boolean> = this._store.select(ProductSelectors.selectProductLoading);
  error$: Observable<string | null> = this._store.select(ProductSelectors.selectProductFailed);
  products$: Observable<Product[]> = this._store.select(ProductSelectors.selectProduct)

  counter$: Observable<{ count: Number }> = this._store.select(selectCounter);
  isVisible: boolean = false;

  constructor(private _store: Store, private _modalService: NzModalService) {
  }

  ngOnInit(): void {
    this._store.dispatch(ProductActions.productLoad())
  }


  increment() {
    this._store.dispatch(CountActions.increment())
  }

  decrement() {
    this._store.dispatch(CountActions.decrement())
  }

  reset() {
    this._store.dispatch(CountActions.reset())
  }

  handleAdd(data: Product) {
    this._store.dispatch(ProductActions.addProduct({product: data}))
  }

  handleUpdate(event: any) {
    console.log({event})
    // this._store.dispatch(ProductActions.updateProduct({productId: event.id, product: event.form}))
  }


  deleteItem(id: string) {
    this._store.dispatch(ProductActions.deleteProduct({productId: id}))
  }

  openModal(data: any = null): void {
    const modal = this._modalService.create({
      nzTitle: data ? 'Update Product' : 'Create Product',
      nzContent: FormComponent,
      nzData: {product: data}, // Dữ liệu ban đầu nếu có
      nzFooter: null
    })
    const instance = modal.getContentComponent() as FormComponent;
    console.log(instance)
    instance.formSubmit.subscribe((formData: Product) => {
      console.log({formData});
      if (data) {
        this._store.dispatch(ProductActions.updateProduct({productId: data.id, product: formData}));
      } else {
        this.handleAdd(formData)
      }
    });
  }
}
