import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-internet',
  templateUrl: './site-internet.component.html',
  styleUrls: ['./site-internet.component.scss']
})
export class SiteInternetComponent implements OnInit {
  preloader=true;
  isLogin = false;
  constructor(private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("userData")){
      this.isLogin = true;
    }
    else {
      this.isLogin = false;
    }
    setTimeout(() => {
      this.preloader = false;
    }, 5000);

    
  }

}
