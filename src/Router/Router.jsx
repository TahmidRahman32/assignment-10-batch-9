
import { createBrowserRouter } from "react-router-dom";
import Home from '../Pages/Home/Home/Home'
import Root from "../Layout/Root/Root";
import Login from "../Auth/Login/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import Signup from "../Auth/Login/Signup";


const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage/>,
      children: [
         {
            path: '/',
            element: <Home></Home>
         },
         {
            path: '/login',
            element: <Login/>
         },
         {
            path: '/signup',
            element: <Signup/>
         },
      ]
   },
]);

export default router;
