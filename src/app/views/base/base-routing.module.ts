import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards.component';
import { FormsComponent } from './forms.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';
import { TabsComponent } from './tabs.component';
import { CarouselsComponent } from './carousels.component';
import { CollapsesComponent } from './collapses.component';
import { PaginationsComponent } from './paginations.component';
import { PopoversComponent } from './popovers.component';
import { ProgressComponent } from './progress.component';
import { TooltipsComponent } from './tooltips.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { LangueComponent } from './langue/langue.component';
import { LangueEditComponent } from './langue-edit/langue-edit.component';
import { CompetenceComponent } from './competence/competence.component';
import { CompetenceEditComponent } from './competence-edit/competence-edit.component';
import { SocieteComponent } from './societe/societe.component';
import { SocieteEditComponent } from './societe-edit/societe-edit.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'cards',
        component: CardsComponent,
        data: {
          title: 'Cards'
        }
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: {
          title: 'Forms'
        }
      },
      {
        path: 'switches',
        component: SwitchesComponent,
        data: {
          title: 'Switches'
        }
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        component: TabsComponent,
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'carousels',
        component: CarouselsComponent,
        data: {
          title: 'Carousels'
        }
      },
      {
        path: 'collapses',
        component: CollapsesComponent,
        data: {
          title: 'Collapses'
        }
      },
      {
        path: 'paginations',
        component: PaginationsComponent,
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'popovers',
        component: PopoversComponent,
        data: {
          title: 'Popover'
        }
      },
      {
        path: 'progress',
        component: ProgressComponent,
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: {
          title: 'Tooltips'
        }
      },
      {
        path: 'navbars',
        component: NavbarsComponent,
        data: {
          title: 'Navbars'
        }
      },
      {
        path: 'langue',
        component: LangueComponent,
        data: {
          title: 'Langues'
        }
      },
      {
        path: 'competence',
        component: CompetenceComponent,
        data: {
          title: 'Competences'
        }
      },
      {
        path: 'competence-edit',
        component: CompetenceEditComponent,
        data: {
          title: 'Competences'
        }
      },
      {
        path: 'societe',
        component: SocieteComponent,
        data: {
          title: 'Societes'
        }
      },
      {
        path: 'societe-edit',
        component: SocieteEditComponent,
        data: {
          title: 'Societes'
        }
      },
      {
        path: 'utilisateur',
        component: UtilisateurComponent,
        data: {
          title: 'Utilisateurs'
        }
      }
    ]
  },
  
  {
    path: 'langueedit',
    component: LangueEditComponent,
    data: {
      title: 'Langue'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
