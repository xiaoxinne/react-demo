import { Component } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import Login from '../page/Login';
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  console.log('🚀 ~ isAuthenticated ~ token:', token);
  return !!token;
};
const router = createBrowserRouter([
  {
    path: '/',
    element: isAuthenticated() ? <App /> : <Navigate to='/login'></Navigate>,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
export default class RouteApp extends Component {
  render() {
    return <RouterProvider router={router}></RouterProvider>;
  }
}
