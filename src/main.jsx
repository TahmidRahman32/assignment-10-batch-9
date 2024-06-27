import React from "react";
import ReactDOM from "react-dom/client";
import  { Toaster } from 'react-hot-toast';
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import AuthProvider from "./Router/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
   <AuthProvider>
      <React.StrictMode>
         <RouterProvider router={router} />
      </React.StrictMode>
      <Toaster />
   </AuthProvider>
);
