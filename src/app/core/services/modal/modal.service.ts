import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../../store/product/product.type";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isVisible = new BehaviorSubject<boolean>(false)
  private data = new BehaviorSubject<any>(null)

  isVisible$ = this.isVisible.asObservable();
  data$ = this.data.asObservable();

  constructor() {
  }

  openModal(data = null) {
    this.isVisible.next(true);
    this.data.next(data);
  }

  closeModal() {
    this.isVisible.next(false);
    this.data.next(null);
  }
}
