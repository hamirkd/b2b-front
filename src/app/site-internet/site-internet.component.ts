import { Component, OnInit } from '@angular/core';

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

}
