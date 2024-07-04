import { useContext } from "react";
import { AuthContext } from "../../Router/AuthProvider";
import Swal from "sweetalert2";

const AddArt = () => {
   const { user } = useContext(AuthContext);
   const AddCraftItem = (e) => {
      e.preventDefault();
      const form = e.target;
      const url = form.url.value;
      const item_name = form.item_name.value;
      const subcategory_Name = form.subcategory_Name.value;
      const price = form.price.value;
      const description = form.description.value;
      const rating = form.rating.value;
      const processing_time = form.processing_time.value;
      const customization = form.customization.value;
      const stockStatus = form.stockStatus.value;
      const UserName = form.UserName.value;
      const UserEmail = form.UserEmail.value;
      const art = { url, item_name, subcategory_Name, description, rating, processing_time, customization, stockStatus, UserEmail, UserName, price };
      console.log(art);

      fetch(" http://localhost:5000/craft", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(art),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.insertedId) {
               Swal.fire({
                  title: "Success!",
                  text: "Art added successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
               });
            }
         });
   };
   return (
      <div>
         <section className="p-6 bg-gray-800 text-gray-50">
            <h2 className="text-4xl font-bold text-center my-6">Add Art Page</h2>
            <form onSubmit={AddCraftItem} noValidate="" action="" className="container flex flex-col mx-auto md:space-y-12 bg-gray-900">
               <fieldset className="grid grid-cols-3 gap-6 md:p-6 rounded-md shadow-sm ">
                  <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="firstname" className="text-sm">
                           image ( use image URL)
                        </label>
                        <input name="url" type="url" placeholder="Url" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:ring-violet-400 border-gray-700 py-2 px-2" />
                     </div>
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="lastname" className="text-sm">
                           item_name
                        </label>
                        <input name="item_name" type="text" placeholder="item_name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:ring-violet-400 border-gray-700 py-2 px-2" />
                     </div>
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">
                           subcategory_Name
                        </label>
                        <input name="subcategory_Name" type="text" placeholder="subcategory_Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:ring-violet-400 border-gray-700 py-2 px-2" />
                     </div>
                     <div className="col-span-full sm:col-span-3">
                        <label htmlFor="email" className="text-sm">
                           price
                        </label>
                        <input name="price" type="text" placeholder="price" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:ring-violet-400 border-gray-700 py-2 px-2" />
                     </div>
                     <div className="col-span-full">
                        <label htmlFor="address" className="text-sm">
                           Description
                        </label>
                        <input name="description" type="text" placeholder="Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 py-3 px-2" />
                     </div>
                     <div className="col-span-full sm:col-span-2">
                        <label className="text-sm">rating</label>
                        <input name="rating" type="text" placeholder="rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:ring-violet-400 border-gray-700 py-2 px-2" />
                     </div>
                     <div className="col-span-full sm:col-span-2">
                        <label htmlFor="city" className="text-sm">
                           processing_time
                        </label>
                        <input name="processing_time" type="text" placeholder="processing_time" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:ring-violet-400 border-gray-700 py-2 px-2" />
                     </div>
                     <div className="col-span-full sm:col-span-2">
                        <label htmlFor="state" className="text-sm">
                           customization
                        </label>
                        <input name="customization" type="text" placeholder="customization-( example- yes, no)" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:ring-violet-400 border-gray-700 py-2 px-2" />
                     </div>
                     <div className="col-span-full sm:col-span-2">
                        <label htmlFor="zip" className="text-sm">
                           stockStatus
                        </label>
                        <input name="stockStatus" type="text" placeholder="stockStatus - example- In stock, Made to Order" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:ring-violet-400 border-gray-700 py-2 px-2" />
                     </div>
                     <div className="col-span-full sm:col-span-2">
                        <label htmlFor="zip" className="text-sm">
                           User Name
                        </label>
                        <input name="UserName" type="text" placeholder="User Name" defaultValue={user?.displayName} className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:ring-violet-400 border-gray-700 py-2 px-2" />
                     </div>
                     <div className="col-span-full sm:col-span-2">
                        <label htmlFor="zip" className="text-sm">
                           User Email
                        </label>
                        <input name="UserEmail" type="email" defaultValue={user?.email} placeholder="User Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:ring-violet-400 border-gray-700 py-2 px-2" />
                     </div>
                  </div>
               </fieldset>
               <div className="flex justify-center w-full">
                  <button className="my-4 relative inline-flex items-center  md:px-5 md:py-5 overflow-hidden font-medium transition-all bg-yellow-600 rounded-full hover:bg-white group w-1/2 ">
                     <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                     <span className="relative w-full text-center text-xl text-white transition-colors duration-200 ease-in-out group-hover:text-yellow-500">Add Craft Item</span>
                  </button>
               </div>
            </form>
         </section>
      </div>
   );
};

export default AddArt;
