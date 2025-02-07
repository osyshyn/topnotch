import { FC } from 'react';
import { PATHNAMES } from '../constants/routes';
// import AboutUs from "../pages/About";
import Home from '../pages/Home';
import CyberSecurityPage from "../pages/CyberSecurity";
import { useRoutes } from 'react-router-dom';
import NetworkManagement from '../pages/NetworkManagement';

const ROUTES = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
  
  {
    element: <NetworkManagement/>,
    path: PATHNAMES.SERVICES_NETWORK,
  },
  {
    element: <CyberSecurityPage/>,
    path: PATHNAMES.SERVICES_CYBERSECURITY,
  }
  // {
  //   element: <AboutUs />,
  //   path: PATHNAMES.ABOUT_US,
  // },

  //   {
  //     element: <Services />,
  //     path: PATHNAMES.SERVICES,
  //   },
];

const AppRoutes: FC = () => {
  return useRoutes(ROUTES);
};

export default AppRoutes;
