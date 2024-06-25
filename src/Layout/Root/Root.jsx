import { Outlet } from "react-router-dom";


const Root = () => {
   return (
      <div className="my-4 md:mx-8">
         <Outlet></Outlet>
      </div>
   );
};

export default Root;