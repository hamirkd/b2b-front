import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvenementComponent } from './evenement.component';
import { EvenementEditComponent } from './evenement-edit/evenement-edit.component';
import { MonChoixComponent } from './mon-choix/mon-choix.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Evenement'
    }, 
    children: [
      {
        path: '',
        component: EvenementComponent,
        data: {
          title: 'Liste evenement'
        }
      },
      {
        path: ':id',
        component: EvenementEditComponent,
        data: {
          title: 'Ajout Evenement'
        }
      },
      {
        path: 'mon-choix/:id',
        component: MonChoixComponent,
        data: {
          title: 'Critère de rendez vous'
        }
      }
    ]
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
