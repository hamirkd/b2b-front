import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RendezVousComponent } from './rendez-vous.component';
import { RendezVousEditComponent } from './rendez-vous-edit/rendez-vous-edit.component';

const routes: Routes = [
  {
    path: '',
    component: RendezVousComponent,
    data: {
      title: 'rendez-vous'
    }
  },
  {
    path: 'rendez-vous-edit',
    component: RendezVousEditComponent,
    data: {
      title: 'rendez-vous-edit'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendezVousRoutingModule {}
