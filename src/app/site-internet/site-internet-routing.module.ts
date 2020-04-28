import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteInternetComponent } from './site-internet.component';

const routes: Routes = [
  {
    path: '',
    component: SiteInternetComponent,
    data: {
      title: 'SiteInternet'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteInternetRoutingModule {}
