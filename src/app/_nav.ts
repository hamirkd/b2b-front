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
];
