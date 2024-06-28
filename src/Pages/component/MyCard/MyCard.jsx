import { FaStar } from "react-icons/fa";

const MyCard = ({ card, myAddCardDelete }) => {
   // console.log(card);
   const { url, item_name, subcategory_Name,  rating, stockStatus, price, _id } = card;
   return (
      <div className="flex flex-col justify-center w-full  mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-[450px] bg-gray-100 text-gray-800">
         <img alt="" className="self-center flex-shrink-0 w-32 h-32 -mt-12 bg-center bg-cover rounded-full bg-gray-500" src={url} />
         <div className="flex-1 my-4">
            <p className="text-xl font-semibold leading-snug">{item_name}</p>
            <p>{subcategory_Name}</p>
         </div>
         <div className="flex gap-5 justify-center mb-2">
            <p>
               Price: <span className="font-bold">{price}</span>
            </p>
            <p className="flex">
               Rating:{" "}
               <span className="font-bold flex items-center">
                  {rating}
                  <span className="flex text-amber-500">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                  </span>
               </span>
            </p>
            <p>
               {" "}
               StockStatus: <span className="font-bold">{stockStatus}</span>
            </p>
         </div>
         <div className="flex items-center justify-center p-3 space-x-3 border-t-2">
            <button onClick={() => myAddCardDelete(_id)} className="my-4  mx-auto relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-yellow-600 rounded-xl hover:bg-white group">
               <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-xl"></span>
               <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-yellow-500 text-xl">Art Delete</span>
            </button>
         </div>
      </div>
   );
};

export default MyCard;
