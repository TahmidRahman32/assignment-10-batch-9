import { Outlet } from "react-router-dom";
import Footer from "../../Pages/component/Foooter/Footer";


const Root = () => {
   return (
      <div className="my-4 md:mx-8">
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;