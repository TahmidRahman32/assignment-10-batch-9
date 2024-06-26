import { Outlet } from "react-router-dom";
import Footer from "../../Pages/component/Foooter/Footer";
import Nav from "../../Pages/component/Nav/Nav";


const Root = () => {
   return (
      <div className="my-4 md:mx-8">
         <Nav></Nav>
         <Outlet></Outlet>
         <Footer></Footer>
      </div>
   );
};

export default Root;