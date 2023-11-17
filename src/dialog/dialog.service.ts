import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog/dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private modalRef:any;

  constructor(private ngbModal: NgbModal) {}

  open(props:any): Promise<any> {
    this.modalRef = this.ngbModal.open(DialogComponent, {
      size: 'sm',
      backdrop: false,
      scrollable: true
    });

    this.modalRef.componentInstance.setDialogProps(props);
    return this.modalRef.result;
  }

}