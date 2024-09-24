/* eslint-disable no-unused-vars */
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import LoginPage from '../Pages/LoginPage';
import Dashboard from '../Pages/dashboard/Dashboard';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
      },
  ]);
const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;
