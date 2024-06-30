import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Root from "../Layout/Root/Root";
import Login from "../Auth/Login/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import Signup from "../Auth/Login/Signup";
import AddArt from "../Pages/AddArt/AddArt";
import AllArtcraftItems from "../Pages/AllArt&craftItems/AllArtcraftItems";
import MyArtCraftList from "../Pages/MyArt&CraftList/MyArtCraftList";
import PrivateRoute from "./PrivateRoute";
import Details from "../Pages/component/details/Details";
import Update from "../Pages/Update/Update";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch(" https://assignment-10-server-azure-kappa.vercel.app/craft"),
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/signup",
            element: <Signup />,
         },
         {
            path: "/addArt",
            element: <AddArt />,
         },
         {
            path: "/AllArtCraftItems",
            element: (
               <PrivateRoute>
                  {" "}
                  <AllArtcraftItems></AllArtcraftItems>{" "}
               </PrivateRoute>
            ),
            loader: () => fetch(" https://assignment-10-server-azure-kappa.vercel.app/allArt"),
         },
         {
            path: "/MyArtCraftList",
            element: (
               <PrivateRoute>
                  <MyArtCraftList />
               </PrivateRoute>
            ),
            loader: () => fetch(" https://assignment-10-server-azure-kappa.vercel.app/myCraft"),
         },
         {
            path: "/details/:id",
            element: (
               <PrivateRoute>
                  <Details />
               </PrivateRoute>
            ),
            loader: ({ params }) => fetch(` https://assignment-10-server-azure-kappa.vercel.app/craft/${params.id}`),
         },
         {
            path: "/update/:id",
            element: (
               <PrivateRoute>
                  <Update />
               </PrivateRoute>
            ),
            loader: ({ params }) => fetch(` https://assignment-10-server-azure-kappa.vercel.app/allArt/${params.id}`),
         },
      ],
   },
]);

export default router;
