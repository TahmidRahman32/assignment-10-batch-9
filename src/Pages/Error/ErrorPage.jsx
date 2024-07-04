import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
   const error = useRouteError()
   console.log(error);
   return (
      <section className="flex items-center h-screen sm:p-16 bg-gray-900 text-gray-100">
         <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-40 h-40 text-gray-600">
               <path fill="currentColor" d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
               <rect width="176" height="32" x="168" y="320" fill="currentColor"></rect>
               <polygon
                  fill="currentColor"
                  points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
               ></polygon>
               <polygon
                  fill="currentColor"
                  points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
               ></polygon>
            </svg>
            <p className="text-3xl">Looks like our services are currently offline</p>
            <Link to={"/"} >
               <button className="relative h-[50px] w-56 overflow-hidden border border-yellow-500 bg-white text-yellow-500 text-xl font-bold font-fStyle shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-yellow-500 hover:before:w-2/4 hover:before:bg-yellow-500 hover:after:w-2/4 hover:after:bg-yellow-500">
                  <span className="relative z-10"> Back to homepage</span>
               </button>
            </Link>
         </div>
      </section>
   );
};

export default ErrorPage;
