import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignupPage from "./pages/LoginSignupPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminGroups from "./pages/AdminGroups.jsx";
import CreateGroupAdmin from "./pages/CreateGroupAdmin.jsx"
import AdminPolicies from "./pages/AdminPolicies.jsx";
import SignupPage from "./pages/SignupPage.jsx";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <LoginSignupPage />,
  },
  {
    path:"/SignupPage",
    element: <SignupPage/>
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
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
