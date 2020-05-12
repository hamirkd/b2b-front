import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
  selector: 'app-site-internet',
  templateUrl: './site-internet.component.html',
  styleUrls: ['./site-internet.component.scss']
})
export class SiteInternetComponent implements OnInit {
  preloader=true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.preloader = false;
    }, 5000);

    
  }
  public items: ItemModel[] = [
    {
        text: 'Edit',
        iconCss: 'ddb-icons e-edit'
    },
    {
        text: 'Delete',
        iconCss: 'ddb-icons e-delete'
    },
    {
        text: 'Mark As Read',
        iconCss: 'ddb-icons e-read'
    },
    {
        text: 'Like Message',
        iconCss: 'ddb-icons e-like'
    }];

}
