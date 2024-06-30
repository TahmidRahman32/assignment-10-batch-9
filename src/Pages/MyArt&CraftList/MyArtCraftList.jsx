import { useLoaderData } from "react-router-dom";
import MyCard from "../component/MyCard/MyCard";
import Swal from "sweetalert2";
import { useState } from "react";

const MyArtCraftList = () => {
   const myAddCraft = useLoaderData();
   // console.log(myAddCraft);
   const [deleted, setDeleted] = useState(myAddCraft);

   const myAddCardDelete = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(` https://assignment-10-server-azure-kappa.vercel.app/myCraft/${id}`, {
               method: "DELETE",
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.deletedCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                     });
                     const orders = deleted.filter((order) => myAddCraft.includes(order.id));
                     setDeleted(orders);
                  }
               });
         }
      });
   };
   return (
      <div>
         <section className="py-6 bg-gray-800 text-gray-100 rounded-2xl">
            <div className=" flex flex-col items-center justify-center  sm:p-10">
               <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">AVAYAGIFTS Fully</p>
               <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl"> Jute Necklace set for Women and Girls</h1>
               <div className=" grid md:grid-cols-3 r mt-8">
                  {myAddCraft.map((card) => (
                     <MyCard key={card._id} card={card} myAddCardDelete={myAddCardDelete}></MyCard>
                  ))}
               </div>
            </div>
         </section>
      </div>
   );
};

export default MyArtCraftList;
