import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MesRendezVousComponent } from './mes-rendez-vous.component';


const routes: Routes = [
  {
    path: '',
    component: MesRendezVousComponent,
    data: {
      title: 'rendez-vous'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesRendezVousRoutingModule {}
