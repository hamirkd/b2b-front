import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantComponent } from './participant.component';
import { ParticipantEditComponent } from './participant-edit/participant-edit.component';
import { ParticipantFicheComponent } from './participant-fiche/participant-fiche.component';
import { ParticipantEvenementEditComponent } from './participant-fiche/participant-evenement-edit/participant-evenement-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ParticipantComponent,
    data: {
      title: 'Participant'
    }
  },
  {
    path: 'add',
    component: ParticipantEditComponent,
    data: {
      title: 'Ajouter Participant'
    }
  },
  {
    path: 'edit/:id',
    component: ParticipantEditComponent,
    data: {
      title: 'Modifier Participant'
    }
  },
  {
    path: ':id',
    component: ParticipantFicheComponent,
    data: {
      title: 'Fiche Participant'
    }
  },
  {
    path: 'EditEvenement',
    component: ParticipantEvenementEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantRoutingModule {}
