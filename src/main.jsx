import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignupPage from "./pages/LoginSignupPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminGroups from "./pages/AdminGroups.jsx";
import CreateGroupAdmin from "./pages/CreateGroupAdmin.jsx"
import AdminPolicies from "./pages/AdminPolicies.jsx";
import ViewUserGroups from "./pages/ViewUserGroups.jsx";
import Signup from "./pages/signup.jsx";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <LoginSignupPage />,
  },
  {
    path: "/Signup",
    element:<Signup/>
  },
  {
    path: "/admindashboard",
    element: <AdminPage />,
  },
  {
    path: "/adminGroup",
    element: <AdminGroups />,
  },
  {
    path: "/createGroup",
    element: <CreateGroupAdmin/>,
  },
  {
    path:"/adminPolicies",
    element: <AdminPolicies/>
  },
  {
    path:"/viewUserGroup",
    element: <ViewUserGroups/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
