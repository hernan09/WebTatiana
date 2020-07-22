import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  constructor() {
    super();
  }
  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = true;
    this.close();
  }
}
