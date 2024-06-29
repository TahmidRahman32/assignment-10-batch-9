import { useLoaderData } from "react-router-dom";
import AllArt from "../component/AllArt/AllArt";
import Swal from "sweetalert2";
import { useState } from "react";

const AllArtcraftItems = () => {
   const allArt = useLoaderData();
   const [allArtData, setAllArtData] = useState(allArt);

   const allArtDeleteBtn = (id) => {
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
            fetch(` https://assignment-10-server-fk285vysi-tahmids-projects-d7114fc9.vercel.app/allArt/${id}`, {
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

                     const remaining = allArtData.filter((d) => d._id !== id);
                     setAllArtData(remaining);
                  }
               });
         }
      });
   };
   return (
      <div>
         <div className="flex flex-col mx-auto max-w-6xl p-6 space-y-4 sm:p-10 ">
            <h2 className="text-3xl font-bold">All Art</h2>
            <ul className="flex  flex-col divide-y divide-gray-700">
               <div>
                  {allArt.map((art) => (
                     <AllArt key={art._id} art={art} allArtDeleteBtn={allArtDeleteBtn}></AllArt>
                  ))}
               </div>
            </ul>
         </div>
      </div>
   );
};

export default AllArtcraftItems;
