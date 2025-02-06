import { ILink } from "../../@types";
import { PATHNAMES } from "../../constants/routes";

export const NAVIGATION_LINKS: ILink[] = [
  { id: 1, label: "Home", href: PATHNAMES.HOME },
  { id: 2, label: "Services", href: PATHNAMES.SERVICES },
  { id: 3, label: "Cases", href: PATHNAMES.CASES },
  { id: 4, label: "About", href: PATHNAMES.ABOUT },
  { id: 5, label: "Contact Us", href: PATHNAMES.CONTACT_US },
  { id: 6, label: "New", href: PATHNAMES.NEW },

];

export const navItems = [
  {
    label: "Services",
    path: "/services",
    component: "Services",
    submenu: [
      {
        label: "Managed Services",
        path: "/services/managed",
        component: "ManagedServices",
      },
      {
        label: "Cybersecurity",
        path: "/services/cybersecurity",
        component: "Cybersecurity",
      },
      {
        label: "Network Management",
        path: "/services/network",
        component: "NetworkManagement",
      },
      {
        label: "IT Consulting",
        path: "/services/consulting",
        component: "ITConsulting",
      },
      {
        label: "Commercial",
        path: "/services/commercial",
        component: "Commercial",
      },
      {
        label: "Residential",
        path: "/services/residential",
        component: "Residential",
      },
      {
        label: "Computer Repair",
        path: "/services/repair",
        component: "ComputerRepair",
      },
      {
        label: "Custom Computers",
        path: "/services/custom",
        component: "CustomComputers",
      },
    ],
  },
];
