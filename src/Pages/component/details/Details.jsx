import { useContext } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Router/AuthProvider";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const Details = () => {
   const { user } = useContext(AuthContext);
   const detail = useLoaderData();
   console.log(detail);

   const { url, item_name, subcategory_Name, description, rating, processing_time, customization, stockStatus, price } = detail;

   const handleAddToCraft = () => {
      fetch(" https://assignment-10-server-fk285vysi-tahmids-projects-d7114fc9.vercel.app/myCraft", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(detail),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            Swal.fire({
               title: "Success!",
               text: "Art added successfully",
               icon: "success",
               confirmButtonText: "Cool",
            });
         });
   };

   return (
      <div>
         <article className="max-w-7xl px-6 py-12 mx-auto space-y-12 border rounded-t-xl">
            <div className="w-full mx-auto space-y-4 text-center ">
               <img className=" h-96 mx-auto rounded-2xl" src={url} alt="" />
               <h4 className="text-xl font-bold font-fStyle">
                  {" "}
                  <span className="font-extrabold text-2xl"> Name:</span> {item_name}
               </h4>

               <h1 className="text-4xl font-bold leading-tight md:text-5xl">{subcategory_Name}</h1>
               <p className="text-lg text-gray-600">
                  {" "}
                  <span className="font-bold">description:</span> {description}
               </p>
               <div className=" flex justify-center gap-8">
                  <p className="text-xl ">
                     <span className="font-bold">customization:</span> {customization}
                  </p>
                  <p className="text-xl ">
                     <span className="font-bold">processing_time:</span> {processing_time}
                  </p>
               </div>
               <button
                  onClick={handleAddToCraft}
                  className="relative h-[50px] w-56 overflow-hidden border border-yellow-500 bg-white text-yellow-500 text-xl font-bold font-fStyle shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-yellow-500 hover:before:w-2/4 hover:before:bg-yellow-500 hover:after:w-2/4 hover:after:bg-yellow-500"
               >
                  <span className="relative z-10">Add to Card</span>
               </button>
            </div>

            <div className="pt-3 border-t border-gray-700 lg:flex lg:justify-around ">
               <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                  <div>
                     <h2 className="text-2xl font-bold font-fStyle">communication</h2>
                     <hr />
                     <p className="font-bold my-2 flex items-center gap-1">
                        {" "}
                        <IoCall size={20} color="#1ED50C " /> 09999999999
                     </p>
                     <p className="font-bold my-2 flex items-center gap-1">
                        {" "}
                        <MdEmail size={20} /> {user?.email}
                     </p>
                  </div>
               </div>

               <div className="flex flex-col">
                  <h2 className="text-2xl font-bold font-fStyle"> Details</h2>
                  <hr />
                  <p className="text-xl">
                     <span className="font-bold">StockStatus:</span> {stockStatus}
                  </p>
                  <p className="font-bold text-xl flex items-center ">
                     Rating: {rating}{" "}
                     <span className="flex text-amber-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                     </span>
                  </p>
                  <p className="text-xl ">
                     <span className="font-bold">Price:</span> {price}
                  </p>
               </div>
            </div>
         </article>
      </div>
   );
};

export default Details;
