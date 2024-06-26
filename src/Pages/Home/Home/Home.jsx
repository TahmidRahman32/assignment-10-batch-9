import Banner from "../../component/Banner/Banner";
import Collection from "../../component/Collection/Collection";
import Nav from "../../component/Nav/Nav";
import SaleSectin from "../../component/salesection/SaleSectin";



const Home = () => {
   return (
      <div>
         <Nav></Nav>
         <Banner></Banner>
         <Collection></Collection>
         <SaleSectin></SaleSectin>
      </div>
   );
};

export default Home;