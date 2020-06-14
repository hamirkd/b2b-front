import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantComponent } from './participant.component';
import { ParticipantEditComponent } from './participant-edit/participant-edit.component';
import { ParticipantFicheComponent } from './participant-fiche/participant-fiche.component';
import { ParticipantEvenementEditComponent } from './participant-fiche/participant-evenement-edit/participant-evenement-edit.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Participant'
    }, 
    children: [
      {
        path: '',
        component: ParticipantComponent,
        data: {
          title: 'Liste participant'
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
        path: ':id',
        component: ParticipantFicheComponent,
        data: {
          title: 'Fiche Participant'
        }
      }
    ]
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
export class ParticipantRoutingModule { }
