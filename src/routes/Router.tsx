import { FC } from 'react';
import { PATHNAMES } from '../constants/routes';
// import AboutUs from "../pages/About";
import Home from '../pages/Home';
import { useRoutes } from 'react-router-dom';

const ROUTES = [
  {
    element: <Home />,
    path: PATHNAMES.HOME,
  },
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
