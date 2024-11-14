import {CommonModule} from "@angular/common";
import {Component, EventEmitter, Inject, inject, Input, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import {Product} from "../../../core/store/product/product.type";
import {NZ_MODAL_DATA, NzModalRef} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule, NzSelectModule]
})
export class FormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();
  form!: FormGroup;
  // @Inject(NZ_MODAL_REF) private modalRef: any;

  product = inject(NZ_MODAL_DATA);

  constructor(
    private _fb: FormBuilder,
    private _modalRef: NzModalRef
  ) {
  }

  ngOnInit(): void {
    console.log("checkkkk", this.product.product);
    this.form = this._fb.group({
      name: this._fb.control('', Validators.required),
      price: this._fb.control('', Validators.required),
      description: this._fb.control('', Validators.required),
      image: this._fb.control('')
    })
    if (this.product.product) {
      this.form.patchValue({
        name: this.product.product.name,
        price: this.product.product.price,
        description: this.product.product.description,
        image: this.product.product.image,
      })
    }
  }


  close() {
    this._modalRef.destroy()
  }

  submit() {
    // if (this.product) {
    //   this.formValue.emit({form: this.form.value, id: this.product.id})
    // } else {
    //   this.formValue.emit(this.form.value)
    // }
    this.formSubmit.emit(this.form.value);
    this._modalRef.destroy()
    // this.form.reset();
  }
}
