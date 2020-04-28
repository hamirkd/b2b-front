import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteInternetComponent } from './site-internet.component';



@NgModule({
  declarations: [SiteInternetComponent],
  exports:[SiteInternetComponent],
  imports: [
    CommonModule
  ]
})
export class SiteInternetModule { }
