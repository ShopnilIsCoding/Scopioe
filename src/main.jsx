import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './pages/Login';
import 'animate.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className=''>Hello world!</div>,
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
