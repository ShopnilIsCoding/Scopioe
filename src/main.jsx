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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)
