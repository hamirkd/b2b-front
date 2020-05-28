import { Component, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SessionService } from '../../services/session.service';
import { navItemsParticipant } from '../../_nav_participant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  /** Les langues {en,fr} */
  lng: string;
  data = false;
  constructor(private route: Router, private translate: TranslateService, private session: SessionService) {

    this.navItems = navItems;
    if (!this.session.isLogin()) {
      this.route.navigate(['/login']);
    }
    if (this.session.isAdmin()) {
      this.navItems = navItemsParticipant;
    }

    this.lng = localStorage.getItem("lng") ? localStorage.getItem("lng") : 'fr';
    this.translate.setDefaultLang(this.lng)
    this.translate.reloadLang(this.lng)
  }
  ngOnInit() {
    this.lng = localStorage.getItem("lng") ? localStorage.getItem("lng") : 'fr';
    this.translate.setDefaultLang(this.lng)
    this.translate.reloadLang(this.lng)
    
    this.navItems = navItems;
    if (!this.session.isLogin()) {
      this.route.navigate(['/login']);
    }
    if (!this.session.isAdmin()) {
      this.navItems = navItemsParticipant;
    }
  }
  public sidebarMinimized = false;
  public navItems = [];// navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  /** La fonction permet de changer la langue */
  lngChange() {
    this.lng = this.lng == 'en' ? 'fr' : 'en';
    localStorage.setItem("lng", this.lng)
    window.location.reload();
  }

  deconnecter() {
    console.log("salut")
    localStorage.removeItem("userData");
    this.route.navigateByUrl("");
  }
}
