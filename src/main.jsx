import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignupPage from "./pages/LoginSignupPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminGroups from "./pages/AdminGroups.jsx";
import CreateGroupAdmin from "./pages/CreateGroupAdmin.jsx";
import AdminPolicies from "./pages/AdminPolicies.jsx";
import Signup from "./pages/Signup.jsx";
import ViewUserGroups from "./pages/ViewUserGroups.jsx";
import ViewUserPolicy from "./pages/ViewUserPolicy.jsx";
import UserGroups from "./pages/UserGroups.jsx";
import CreatePolicy from "./pages/CreatePolicy.jsx";
import ViewUserRequest from "./pages/ViewUserRequest.jsx";
import AdminRequests from "./pages/AdminRequests.jsx";
import RequestGroups from "./pages/RequestGroups.jsx";
import UserPolicies from "./pages/UserPolicies.jsx";
import RequestPolicies from "./pages/RequestPolicies.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginSignupPage />,
  },
  {
    path: "/Signup",
    element: <Signup />,
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
    element: <CreateGroupAdmin />,
  },
  {
    path: "/adminPolicies",
    element: <AdminPolicies />,
  },
  {
    path: "/AdminRequest",
    element: <AdminRequests />,
  },
  {
    path: "/viewUserGroup",
    element: <ViewUserGroups />,
  },
  {
    path: "/viewUserProfile",
    element: <ViewUserPolicy />,
  },
  {
    path: "/UserGroup",
    element: <UserGroups />,
  },
  {
    path: "/RequestGroups",
    element: <RequestGroups />,
  },
  {
    path: "/CreatePolicy",
    element: <CreatePolicy />,
  },
  {
    path: "/ViewUserRequest",
    element: <ViewUserRequest />,
  },
  {
    path: "/UserPolicies",
    element: <UserPolicies />,
  },
  {
    path: "/RequestPolicies",
    element: <RequestPolicies />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
