import { FC } from 'react';
import { PATHNAMES } from '../constants/routes';
// import AboutUs from "../pages/About";
import Home from '../pages/Home';
import CyberSecurityPage from '../pages/CyberSecurity';
import { useRoutes } from 'react-router-dom';
import NetworkManagement from '../pages/NetworkManagement';
import Managed from '../pages/Managed';
import Commercial from '../pages/Commercial';
import CustomComputers from '../pages/CustomComputers';
import Residential from '../pages/Residential';
import AboutRates from '../pages/AboutRates';
import AboutPrivacy from '../pages/AboutPrivacy';

const ROUTES = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },

  {
    element: <NetworkManagement />,
    path: PATHNAMES.SERVICES_NETWORK,
  },
  {
    element: <CyberSecurityPage />,
    path: PATHNAMES.SERVICES_CYBERSECURITY,
  },
  {
    element: <Managed />,
    path: PATHNAMES.SERVICES_MANAGED,
  },
  {
    element: <Commercial />,
    path: PATHNAMES.SERVICES_COMMERCIAL,
  },
  {
    element: <CustomComputers />,
    path: PATHNAMES.SERVICES_CUSTOM,
  },
  {
    element: <Residential />,
    path: PATHNAMES.SERVICES_RESIDENTIAL,
  },

  {
    element: <AboutRates />,
    path: PATHNAMES.ABOUT_RATES,
  },
  {
    element: <AboutPrivacy />,
    path: PATHNAMES.ABOUT_PRIVACY,
  },
];

const AppRoutes: FC = () => {
  return useRoutes(ROUTES);
};

export default AppRoutes;
