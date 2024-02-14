import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignupPage from "./pages/LoginSignupPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminGroups from "./pages/AdminGroups.jsx";
import CreateGroupAdmin from "./pages/CreateGroupAdmin.jsx"
import AdminPolicies from "./pages/AdminPolicies.jsx";
<<<<<<< HEAD
import SignupPage from "./pages/SignupPage.jsx";
=======
import Signup from "./pages/Signup.jsx";
import ViewUserGroups from "./pages/ViewUserGroups.jsx";
>>>>>>> 839f2229f97016d49793c833582d3453e4c3ff90

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <LoginSignupPage />,
  },
  {
<<<<<<< HEAD
    path:"/SignupPage",
    element: <SignupPage/>
  },
=======
    path: "/Signup",
    element:<Signup/>
  },
  
>>>>>>> 839f2229f97016d49793c833582d3453e4c3ff90
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
