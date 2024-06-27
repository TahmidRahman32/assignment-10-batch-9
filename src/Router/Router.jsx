
import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home/Home'
import Root from "../Layout/Root/Root";
import Login from "../Auth/Login/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import Signup from "../Auth/Login/Signup";
import AddArt from "../Pages/AddArt/AddArt";
import AllArtcraftItems from "../Pages/AllArt&craftItems/AllArtcraftItems";
import MyArtCraftList from "../Pages/MyArt&CraftList/MyArtCraftList";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/craft"),
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
            path: "/AllArt&craftItems",
            element: (
               <PrivateRoute>
                  {" "}
                  <AllArtcraftItems></AllArtcraftItems>{" "}
               </PrivateRoute>
            ),
         },
         {
            path: "/MyArtCraftList",
            element: (
               <PrivateRoute>
                  <MyArtCraftList />
               </PrivateRoute>
            ),
         },
      ],
   },
]);

export default router;
