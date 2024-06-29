import { FaStar } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
const AllArt = ({ art, allArtDeleteBtn }) => {
   // console.log(art);
   const { url, item_name, subcategory_Name, description, rating, processing_time, customization, stockStatus, price, _id } = art;
   return (
      <div>
         <li className="md:flex flex-col py-6 my-10 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-5 sm:space-x-4">
               <img className="flex-shrink-0 object-cover w-28 h-28 dark:border- rounded outline-none sm:w-44 sm:h-44 bg-gray-500" src={url} alt="Set of travel chargers" />
               <div className="flex flex-col justify-between w-full pb-4">
                  <div className="md:flex justify-between w-full pb-2 space-x-2">
                     <div className="space-y-1">
                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">{item_name}</h3>
                        <p className="text-sm text-gray-400">{subcategory_Name}</p>
                        <div>
                           <p>
                              description: <span className="font-bold">{description}</span>
                           </p>
                           <p>
                              Customization: <span className="font-bold">{customization}</span>
                           </p>
                           <p>
                              Processing_time: <span className="font-bold">{processing_time}</span>
                           </p>
                        </div>
                     </div>
                     <div className="text-right">
                        <Link to={`/update/${_id}`}>
                           <button className="flex gap-1 items-center text-gray-800 bg-yellow-500 rounded-xl py-2 px-4 hover:bg-yellow-400">
                              <GrUpdate /> <span className="text-xl font-bold">Update</span>
                           </button>
                        </Link>
                     </div>
                  </div>
                  <div className="md:flex text-sm divide-x">
                     <button onClick={() => allArtDeleteBtn(_id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                           <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                           <rect width="32" height="200" x="168" y="216"></rect>
                           <rect width="32" height="200" x="240" y="216"></rect>
                           <rect width="32" height="200" x="312" y="216"></rect>
                           <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                        </svg>
                        <span>Remove</span>
                     </button>
                     <button type="button" className="flex items-center px-2 py-1 space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                           <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                        </svg>
                        <span>Add to favorites</span>
                     </button>
                     <div className="md:flex gap-5 justify-center items-center ">
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
                  </div>
               </div>
            </div>
         </li>
      </div>
   );
};

export default AllArt;
