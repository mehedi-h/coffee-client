import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/addCoffee';
import UpdateCoffee from './components/UpdateCoffee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee",
    element: <UpdateCoffee></UpdateCoffee>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
