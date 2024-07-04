import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Banner/Banner";
import Collection from "../../component/Collection/Collection";

import SaleSectin from "../../component/salesection/SaleSectin";
import ArtCollection from "../ArtCollection/ArtCollection";


const Home = () => {
   const artCollection = useLoaderData();
   console.log(artCollection);
   return (
      <div>
         <Banner></Banner>
         <Collection></Collection>
         <div className="grid md:grid-cols-3 md:gap-8">
            {
               artCollection?.map(art => <ArtCollection key={art._id} art={art}></ArtCollection> )
            }
         </div>
         <SaleSectin></SaleSectin>
      </div>
   );
};

export default Home;
