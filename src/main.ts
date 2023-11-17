import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { DialogService } from './dialog/dialog.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>{{ name }}</h1>
    <!---<a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>--->
    <h2>Created by: {{author}} </h2>
    <button class="btn btn-primary" (click)="showDialog()">{{btn_text}}</button>
  `,
})

export class App {
  name = 'Reusable Angular Dialog Component';
  author = 'Aide Barniskyte';
  btn_text = 'Click me! :)';
  title = 'Reusable Dialog';

  constructor(private dialogService: DialogService) {  }

  showDialog() {
    this.dialogService.open(
      {
        title: 'Save changes',
        message: 'Do you want to save changes to this document?',
        positiveBtnText: 'Yes',
        negativeBtnText: 'No',
        neutralBtnText: 'Cancel'
      })
      .then(result => {
        console.log(result);
    }, () => {});
  }
}
bootstrapApplication(App);
