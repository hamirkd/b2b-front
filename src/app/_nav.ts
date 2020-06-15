import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Participant'
  },
  {
    name: 'Liste Participant',
    url: '/participant',
    icon: 'icon-user'
  },
  {
    name: 'Rendez-vous',
    url: '/rendez-vous',
    icon: 'icon-puzzle'
  },
  {
    name: 'Evenement',
    url: '/evenement',
    icon: 'icon-layers'
  },
  {
    name: 'Mon compte',
    url: '/mon-compte',
    icon: 'icon-layers'
  },
  {
    name: 'Configuration',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Langues',
        url: '/base/langue',
        icon: 'icon-puzzle'
      },
      {
        name: 'Competences',
        url: '/base/competence',
        icon: 'icon-puzzle'
      },
      {
        name: 'Societes',
        url: '/base/societe',
        icon: 'icon-puzzle'
      },
      {
        name: 'Utilisateurs',
        url: '/base/utilisateur',
        icon: 'icon-users'
      },
      {
        name: 'Cards',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Carousels',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Collapses',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      {
        name: 'Forms',
        url: '/base/forms',
        icon: 'icon-puzzle'
      },
      {
        name: 'Navbars',
        url: '/base/navbars',
        icon: 'icon-puzzle'

      },
      {
        name: 'Pagination',
        url: '/base/paginations',
        icon: 'icon-puzzle'
      },
      {
        name: 'Popovers',
        url: '/base/popovers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Progress',
        url: '/base/progress',
        icon: 'icon-puzzle'
      },
      {
        name: 'Switches',
        url: '/base/switches',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tables',
        url: '/base/tables',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tabs',
        url: '/base/tabs',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips',
        icon: 'icon-puzzle'
      }
    ]
  }
];
