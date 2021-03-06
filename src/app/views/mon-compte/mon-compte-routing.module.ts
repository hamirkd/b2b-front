import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonCompteComponent } from './mon-compte.component';


const routes: Routes = [
  {
    path: '',
    component: MonCompteComponent,
    data: {
      title: 'Mon compte'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonCompteRoutingModule {}
