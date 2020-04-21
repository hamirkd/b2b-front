import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantComponent } from './participant.component';

const routes: Routes = [
  {
    path: '',
    component: ParticipantComponent,
    data: {
      title: 'Participant'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantRoutingModule {}
