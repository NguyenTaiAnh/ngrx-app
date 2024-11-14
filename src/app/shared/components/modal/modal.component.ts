import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FormGroup, FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ModalService} from "../../../core/services/modal/modal.service";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NzButtonModule, NzModalModule, CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() form!: FormGroup;
  @Output() formSubmit = new EventEmitter<any>();
  isVisible$ = this.modalService.isVisible$;
  data$ = this.modalService.data$;

  constructor(private modalService: ModalService) {
  }

  handleCancel(): void {
    this.modalService.closeModal();
  }

  handleSubmit(): void {
    console.log("modal submit", this.form
    )
    if (this.form && this.form.valid) {
      this.formSubmit.emit(this.form.value); // Emit dữ liệu form về component cha this.modalService.close(); }
    }
  }
}
