import img1 from "../../../assets/images (2).jpg";
import img2 from "../../../assets/images (3).jpg";
import img3 from "../../../assets/images (1).jpg";
import img4 from "../../../assets/images.png";

const SaleSectin = () => {
   return (
      <div className="mt-10">
         <div className="md:flex justify-center   animate__animated animate__fadeInUpBig animate__slow">
            <div className="relative md:mx-10">
               <img className="w-[600px] h-[650px]  " src={img1} alt="" />
               <div className="border-l-8 border-b-8  px-8 absolute top-0 right-0 ">
                  <p className="font-bold text-xl text-white">UpTo</p>
                  <h2 className="text-6xl font-bold text-yellow-600">70%</h2>
                  <p className="font-bold text-xl text-end text-white">Off</p>
                  <hr />
                  <a className="my-4 relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-yellow-600 rounded-full hover:bg-white group">
                     <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                     <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-yellow-500">Discount</span>
                  </a>
               </div>
               <div className="absolute top-8 right-1/2">
                  <h4 className="text-center text-2xl text-yellow-500">SALE</h4>
                  <h1 className="uppercase text-4xl font-bold text-white">new fashion</h1>
               </div>
            </div>
            <div className="md:flex gap-10">
               <div>
                  <div>
                     <img className="md:w-[380px] w-full h-[320px]" src={img3} alt="" />
                  </div>
                  <div className="px-2 py-24 bg-stone-800 text-center">
                     <h5 className="text-white text-xl font-bold text-center">trending Design 2024</h5>
                     <h2 className="text-white text-4xl font-bold">koumianakis </h2>
                     <a className="my-4  mx-auto relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-yellow-600 rounded-xl hover:bg-white group">
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-xl"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-yellow-500 text-xl">Shop Collection</span>
                     </a>
                  </div>
               </div>
               <div>
                  <div className="px-2 py-24 bg-stone-800 text-center gap-4">
                     <h5 className="text-white text-xl font-bold text-center">trending Design 2024</h5>
                     <h2 className="text-white text-4xl font-bold"> Wood koumianakis </h2>
                     <a className="my-4  mx-auto relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-yellow-600 rounded-xl hover:bg-white group">
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-xl"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-yellow-500 text-xl">Shop Collection</span>
                     </a>
                  </div>
                  <div>
                     <img className="md:w-[380px] w-full h-[320px]" src={img2} alt="" />
                  </div>
               </div>
               <div>
                  <div>
                     <img className="md:w-[380px] w-full h-[320px]" src={img4} alt="" />
                  </div>
                  <div className="px-7 py-24 bg-stone-800 text-center gap-4">
                     <h5 className="text-white text-xl font-bold text-center">trending Design 2024</h5>
                     <h2 className="text-white text-4xl font-bold">Cosmic Wood </h2>
                     <a className="my-4  mx-auto relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-yellow-600 rounded-xl hover:bg-white group">
                        <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-xl"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-yellow-500 text-xl">Shop Collection</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SaleSectin;