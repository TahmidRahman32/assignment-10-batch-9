import { IoCall } from "react-icons/io5";
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";


const Details = () => {
   return (
      <div>
         <article className="max-w-7xl px-6 py-12 mx-auto space-y-12 border rounded-t-xl">
            <div className="w-full mx-auto space-y-4 text-center ">
               <img className=" h-96 mx-auto rounded-2xl" src={image} alt="" />
               <h4 className="text-xl font-bold font-fStyle">
                  {" "}
                  <span className="font-extrabold text-2xl">Building Name:</span> {name}
               </h4>
               <div className="lg:flex justify-center gap-8">
                  <p className="font-bold">Facilities:</p>
                  <p className="text-lg font-semibold tracking-wider uppercase">#{facilities[0]}</p>
                  <p className="text-lg font-semibold tracking-wider uppercase">#{facilities[1]}</p>
                  <p className="text-lg font-semibold tracking-wider uppercase">#{facilities[2]}</p>
               </div>
               <h1 className="text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
               <p className="text-lg text-gray-600">
                  {" "}
                  <span className="font-bold">description:</span> {description}
               </p>
               <p className="text-xl text-gray-800 flex justify-center">
                  <span className="font-bold flex items-center">
                     <MdOutlineLocationOn size={20} /> Location:{" "}
                  </span>{" "}
                  {location}
               </p>

               <button
                  onClick={handleOrderBtn}
                  className="relative h-[50px] w-56 overflow-hidden border border-red-400 bg-red-100 text-red-600 text-xl font-bold font-fStyle shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-red-400 hover:before:w-2/4 hover:before:bg-red-400 hover:after:w-2/4 hover:after:bg-red-400"
               >
                  <span className="relative z-10">Order Now</span>
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
                  <h2 className="text-2xl font-bold font-fStyle">Flat Details</h2>
                  <hr />
                  <p className="text-xl">
                     <span className="font-bold">Status:</span> {status}
                  </p>
                  <p className="text-xl ">
                     <span className="font-bold">Area:</span> {area}
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