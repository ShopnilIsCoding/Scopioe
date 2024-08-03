import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './pages/Login';
import 'animate.css';
import RootLayout from './RootLayout/RootLayout';
import Home from './pages/Home';
import AuthProvider from './Providers/AuthProvider';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './Routes/PrivateRoutes';
import ErrorElement from './components/ErrorElement';
import NewListing from './pages/NewListing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element:<PrivateRoutes><Home></Home></PrivateRoutes>
      },
      {
        path:'/new-listing',
        element:<PrivateRoutes><NewListing></NewListing></PrivateRoutes>
      }
    ]
  },
  {
    path:"/login",
    element:<Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </AuthProvider>
    
  </React.StrictMode>,
)
