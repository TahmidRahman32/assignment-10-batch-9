import remove1 from "../../../assets/removbg1.png";
import remove2 from "../../../assets/remove2.png";
import remove3 from "../../../assets/remve3.png";
import remove4 from "../../../assets/remove4.png";
import remove5 from "../../../assets/remove5.png";

const Collection = () => {
   return (
      <div className=" md:mt-72 ">
         <h1 className="text-4xl font-bold  text-center my-8">Explore Popular Jewellery</h1>

         <div className="flex gap-10 mt-8 justify-center animate__animated animate__lightSpeedInRight  animate__slow">
            <img className="md:w-52 w-8" src={remove1} alt="" />
            <img className="md:w-52 w-8" src={remove2} alt="" />
            <img className="md:w-52 w-8" src={remove3} alt="" />
            <img className="md:w-52 w-8" src={remove4} alt="" />
            <img className="md:w-52 w-8" src={remove5} alt="" />
         </div>
      </div>
   );
};

export default Collection;