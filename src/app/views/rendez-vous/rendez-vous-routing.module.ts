import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RendezVousComponent } from './rendez-vous.component';

const routes: Routes = [
  {
    path: '',
    component: RendezVousComponent,
    data: {
      title: 'rendez-vous'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendezVousRoutingModule {}
