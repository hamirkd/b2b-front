import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvenementComponent } from './evenement.component';
import { EvenementEditComponent } from './evenement-edit/evenement-edit.component';

const routes: Routes = [
  {
    path: '',
    component: EvenementComponent,
    data: {
      title: 'Evenement'
    }
  },
  {
    path: 'add',
    component: EvenementEditComponent,
    data: {
      title: 'Ajouter Evenement'
    }
  },
  {
    path: 'edit/:id',
    component: EvenementEditComponent,
    data: {
      title: 'Evenement'
    }
  },
  {
    path: 'edit',
    component: EvenementEditComponent,
    data: {
      title: 'Evenement'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule {}
