import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')))
const Icons = Loadable(lazy(() => import('../views/icons/Icons')))
const Users = Loadable(lazy(() => import('../views/pages/Users/Users')))
const AddUsers = Loadable(lazy(() => import('../views/pages/AddUser/AddUser')))
const Orders = Loadable(lazy(() => import('../views/pages/Order/Order')))
const OrderTrack = Loadable(lazy(() => import('../views/pages/OderTrack/OderTrack')))
const Request = Loadable(lazy(() => import('../views/pages/Request/Request')))
const Msg = Loadable(lazy(() => import('../views/pages/Chat/Chat')))
const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')))
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/service/users', exact: true, element: <Users /> },
      { path: '/service/add', exact: true, element: <AddUsers /> },
      { path: '/ord/order', exact: true, element: <Orders/> },
      { path: '/ord/track', exact: true, element: <OrderTrack/> },
      { path: '/rq/request', exact: true, element: <Request/> },
      { path: '/eng/msg', exact: true, element: <Msg/> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
