import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";


const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);

   const location = useLocation();
   // console.log(location.pathname);

   if (loading) {
      return (
         <div className="flex justify-center items-center h-screen">
            <RingLoader size={100} color="#836c0a" />
         </div>
      );
   }

   if (user) {
      return children;
   }
   return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
