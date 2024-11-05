import React, { Component } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Chat from '../pages/Chat';
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  console.log('🚀 ~ isAuthenticated ~ token:', token);
  return !!token;
};
const router = createBrowserRouter([
  {
    path: '/',
    element: isAuthenticated() ? <App /> : <Navigate to='/login'></Navigate>,
    children: [
      {
        path: '/chat',
        element: <Chat></Chat>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
export default class RouteApp extends Component {
  render() {
    return (
      <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>;
      </React.StrictMode>
    );
  }
}
