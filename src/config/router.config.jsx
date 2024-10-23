import { Component } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../page/Login';
const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/login',
    Component: Login,
  },
]);
export default class RouteApp extends Component {
  render() {
    return <RouterProvider router={router}></RouterProvider>;
  }
}
