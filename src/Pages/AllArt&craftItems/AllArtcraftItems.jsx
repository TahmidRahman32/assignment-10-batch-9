import { useLoaderData } from "react-router-dom";
import AllArt from "../component/AllArt/AllArt";
import Swal from "sweetalert2";

const AllArtcraftItems = () => {
   const allArt = useLoaderData();
   console.log(allArt);

   const allArtDeleteBtn = (id) => {
      console.log("up", id);

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
            fetch(`http://localhost:5000/allArt/${id}`, {
               method: "DELETE",
            })
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);
                  if (data.deletedCount > 0) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                     });
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
