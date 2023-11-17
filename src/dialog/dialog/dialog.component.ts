import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  
  public title:string = "Title";
  public message:any = "Content";
  public positiveBtnText:string = "Yes";
  public negativeBtnText:string = "No";
  public neutralBtnText:string = "null";

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() { }

  setDialogProps(props: any) {
    this.title = props.title || "Dialog";
    this.message = props.message;
    this.positiveBtnText = props.positiveBtnText || "Yes";
    this.negativeBtnText = props.negativeBtnText || "No";
    this.neutralBtnText = props.neutralBtnText || "null";
  }

  actionTaken(clickedValue: any) {

    this.activeModal.close(JSON.stringify(clickedValue));
  }

}