import { Component, OnInit } from '@angular/core';
import * as jquery_min from '../../assets/js/jquery-min';
import * as jquery_nav from "../../assets/js/jquery.nav.js";
import * as popper from "../../assets/js/popper.min.js";
import * as bootstrap from "../../assets/js/bootstrap.min.js";
import * as owl from "../../assets/js/owl.carousel.min.js";
import * as wow from "../../assets/js/wow.js";
import * as scrolling from "../../assets/js/scrolling-nav.js";
import * as jquery_easing from "../../assets/js/jquery.easing.min.js";
import * as jquery_counterup from "../../assets/js/jquery.counterup.min.js";      
import * as waypoints from "../../assets/js/waypoints.min.js";   
import * as main from "../../assets/js/main.js";
@Component({
  selector: 'app-site-internet',
  templateUrl: './site-internet.component.html',
  styleUrls: ['./site-internet.component.css']
})
export class SiteInternetComponent implements OnInit {
  preloader=true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.preloader = false;
    }, 2000);
  }

}
