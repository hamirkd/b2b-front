import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantComponent } from './participant.component';
import { ParticipantEditComponent } from './participant-edit/participant-edit.component';

const routes: Routes = [
  {
    path: 'add',
    component: ParticipantComponent,
    data: {
      title: 'Participant'
    }
  },
  {
    path: '',
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantRoutingModule {}
