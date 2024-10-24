import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';
import { path } from 'd3';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

const routes = [
  {
    exact: 'true',
    path: '/',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },{
    exact: 'true',
    path: '/reset-password',
    element: lazy(() => import('./views/auth/signin/fogetpassword'))
  },
  {
    exact: 'true',
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: 'true',
    path: '/Admin',
    layout: AdminLayout,
    element: lazy(() => import('./views/dashboard/Hr_Manager'))
  },
  {
    exact: 'true',
    path: '/profile',
    element: lazy(() => import('./views/Profile'))
  },
  {
    exact: 'true',
    path: '/leave-request-form',
    element: lazy(() => import('./views/LeaveRequestForm'))
  },



  // Editing the routes array

  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: 'true',
        path: '/',
        element: lazy(() => import('./views/auth/signin/SignIn1'))
      },
      {
        exact: 'true',
        path: '/Admin',
        element: lazy(() => import('./views/dashboard/Hr_Manager'))
      },{
        exact: 'true',
        path: '/Admin/leave-request-form',
        element: lazy(() => import('./views/LeaveRequestForm'))
      },
      {
        exact: 'true',
        path: '/Admin/employees',
        element: lazy(() => import('./views/Employees'))
      },{
        exact: 'true',
        path: '/Admin/employees/add-employee',
        element: lazy(() => import('./views/Profile/add_employee'))
      },
      {
        exact: 'true',
        path: '/Admin/employees/profile',
        element: lazy(() => import('./views/Profile/index'))
      },
      {
        exact: 'true',
        path: '/Admin/leave-applications',
        element: lazy(() => import('./views/LeaveApplications/index'))
      },
      {
        exact: 'true',
        path: '/Admin/leave-applications/leave-request-form',
        element: lazy(() => import('./views/LeaveRequestForm/index'))
      },
      {
        exact: 'true',
        path: '/Admin/reports',
        element: lazy(() => import('./views/Reports'))
      },
      {
        exact: 'true',
        path: '/Admin/employees/profile',
        element: lazy(() => import('./views/Profile/index'))
      },
      {
        exact: 'true',
        path: '/Admin/log-out',
        element: lazy(() => import('./views/auth/signin/SignIn1'))
      }
    ]
  }
];

export default routes;
