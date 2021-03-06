import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { SiteInternetModule } from './site-internet/site-internet.module';
import { SiteInternetComponent } from './site-internet/site-internet.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },

  {
    path: 'site-internet',
    component: SiteInternetComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard1',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'participant',
        loadChildren: () => import('./views/participant/participant.module').then(m => m.ParticipantModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/participant/participant.module').then(m => m.ParticipantModule)
      },
      {
        path: 'rendez-vous',
        loadChildren: () => import('./views/rendez-vous/rendez-vous.module').then(m => m.RendezVousModule)
      },
      {
        path: 'mes-rendez-vous',
        loadChildren: () => import('./views/mes-rendez-vous/mes-rendez-vous.module').then(m => m.MesRendezVousModule)
      },
      {
        path: 'mon-compte',
        loadChildren: () => import('./views/mon-compte/mon-compte.module').then(m => m.MonCompteModule)
      },
      {
        path: 'evenement',
        loadChildren: () => import('./views/evenement/evenement.module').then(m => m.EvenementModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
