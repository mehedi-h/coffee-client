import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/addCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import App from "./App";
import SignUp from "./components/SignUp";
import Signin from "./components/Signin";
import AuthProviders from "./Providers/AuthProviders";
import Users from "./components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://coffee-server-ftz8lwl7e-m-h-shamims-projects.vercel.app/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-server-ftz8lwl7e-m-h-shamims-projects.vercel.app/coffee/${params.id}`),
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('https://coffee-server-ftz8lwl7e-m-h-shamims-projects.vercel.app/user')
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
