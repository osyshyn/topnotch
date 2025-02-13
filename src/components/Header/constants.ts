import { ILink } from '../../@types';
import { PATHNAMES } from '../../constants/routes';

export const NAVIGATION_LINKS: ILink[] = [
  { id: 1, label: 'Home', href: PATHNAMES.HOME },
  { id: 2, label: 'Services' },
  { id: 3, label: 'Cases' },
  { id: 4, label: 'About' },
  { id: 5, label: 'Contact Us' },
  { id: 6, label: 'New' },
];

export const navItems = [
  {
    label: 'Services',
    path: '/services',
    component: 'Services',
    submenu: [
      {
        label: 'Managed Services',
        path: '/services/managed',
        component: 'ManagedServices',
      },
      {
        label: 'Cybersecurity',
        path: '/services/cybersecurity',
        component: 'Cybersecurity',
      },
      {
        label: 'Network Management',
        path: '/services/network',
        component: 'NetworkManagement',
      },
      {
        label: 'IT Consulting',
        path: '/services/consulting',
        component: 'ITConsulting',
      },
      {
        label: 'Commercial',
        path: '/services/commercial',
        component: 'Commercial',
      },
      {
        label: 'Residential',
        path: '/services/residential',
        component: 'Residential',
      },
      {
        label: 'Computer Repair',
        path: '/services/repair',
        component: 'ComputerRepair',
      },
      {
        label: 'Custom Computers',
        path: '/services/custom',
        component: 'CustomComputers',
      },
    ],
  },
  {
    label: 'Cases',
    path: '/cases',
    component: 'Cases',
    submenu: [
      {
        label: 'Success Stories',
        path: '/cases/success-stories',
        component: 'SuccessStories',
      },
      {
        label: 'Client Projects',
        path: '/cases/client-projects',
        component: 'ClientProjects',
      },
      {
        label: 'Industry Solutions',
        path: '/cases/industry-solutions',
        component: 'IndustrySolutions',
      },
      {
        label: 'Case Studies',
        path: '/cases/studies',
        component: 'CaseStudies',
      },
    ],
  },
  {
    label: 'About',
    path: '/about',
    component: 'About',
    submenu: [
      {
        label: 'Our Team',
        path: '/about/team',
        component: 'OurTeam',
      },
      {
        label: 'Company History',
        path: '/about/history',
        component: 'CompanyHistory',
      },
      {
        label: 'Mission & Values',
        path: '/about/mission',
        component: 'MissionValues',
      },
      {
        label: 'Partnerships',
        path: '/about/partnerships',
        component: 'Partnerships',
      },
      {
        label: 'Certifications',
        path: '/about/certifications',
        component: 'Certifications',
      },
    ],
  },
  {
    label: 'New',
    path: '/new',
    component: 'New',
    submenu: [
      {
        label: 'Latest Products',
        path: '/new/products',
        component: 'LatestProducts',
      },
      {
        label: 'Recent Updates',
        path: '/new/updates',
        component: 'RecentUpdates',
      },
      {
        label: 'Upcoming Features',
        path: '/new/features',
        component: 'UpcomingFeatures',
      },
      {
        label: 'News & Events',
        path: '/new/news',
        component: 'NewsEvents',
      },
    ],
  },
];
