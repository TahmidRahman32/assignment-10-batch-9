import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/bundle";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../../../assets/slider/coconut-plants-hat-necklace.png";
import slider2 from "../../../assets/slider/flat-lay-essentials-bead-working.png";
import slider3 from "../../../assets/slider/hat-with-flowers-shells.jpg";
import removeBg from "../../../assets/slider/removbg1.png";
import removeBg2 from "../../../assets//slider/removbg1.png";
const Banner = () => {
   return (
      <div className="px-2 md:px-0 mt-10 md:mt-0 md:h-[550px] md:mb-16 mb-8">
         <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
         >
            <SwiperSlide className="md:h-[750px] rounded-xl">
               <img className="w-full md:h-[750px] relative rounded-xl" src={slider1} alt="" />
               <div className="bg-gradient-to-r from-[#0a031bBD] to-[#090520cc] h-full absolute top-0 w-full rounded-xl">
                  <div className="md:flex justify-around md:items-center pt-14 md:pt-0 h-[750px]">
                     <div className="animate__animated animate__backInRight animate__slow ">
                        <h2 className="text-3xl md:text-6xl text-white font-fStyle font-bold  ">
                           Jewellery Shop
                           <br /> Elementor Pro Template Kit
                        </h2>

                        <p className=" md:mx-0  md:text-xl text-gray-200">
                           You Will Be Able To Build Your Website According To Your Needs With The Help <br /> Of Amazing Elementor Page Builder. You Don’t Need To Know Coding,{" "}
                        </p>
                     </div>
                     <div className="animate__animated animate__backInRight animate__slow ">
                        <img className="w-[850px] " src={removeBg} alt="" />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className="md:h-[750px] rounded-xl">
               <img className="w-full md:h-[750px] relative rounded-xl" src={slider2} alt="" />
               <div className="bg-gradient-to-r from-[#0a031bBD] to-[#090520cc] h-full absolute top-0 w-full rounded-xl">
                  <div className="md:flex justify-around md:items-center pt-14 md:pt-0 h-[750px]">
                     <div className="animate__animated animate__backInLeft animate__slow ">
                        <h2 className="text-3xl md:text-6xl text-white font-fStyle font-bold  ">
                           Jewellery Shop
                           <br /> Elementor Pro Template Kit
                        </h2>

                        <p className=" my-3 text-xl text-gray-200">
                           You Will Be Able To Build Your Website According To Your Needs With The Help <br /> Of Amazing Elementor Page Builder. You Don’t Need To Know Coding,{" "}
                        </p>
                     </div>
                     <div className="animate__animated animate__backInRight animate__slow ">
                        <img className="w-[850px] " src={removeBg2} alt="" />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide className="md:h-[750px] rounded-xl">
               <img className="w-full md:h-[750px] relative rounded-xl" src={slider3} alt="" />
               <div className="bg-gradient-to-r from-[#0a031bBD] to-[#090520cc] h-full absolute top-0 w-full rounded-xl">
                  <div className="md:flex justify-around md:items-center pt-14 md:pt-0 h-[750px]">
                     <div className="animate__animated animate__backInLeft animate__slow ">
                        <h2 className="text-3xl md:text-6xl text-white font-fStyle font-bold  ">
                           Jewellery Shop
                           <br /> Elementor Pro Template Kit
                        </h2>

                        <p className=" my-3 text-xl text-gray-200">
                           You Will Be Able To Build Your Website According To Your Needs With The Help <br /> Of Amazing Elementor Page Builder. You Don’t Need To Know Coding,{" "}
                        </p>
                     </div>
                     <div className="animate__animated animate__backInRight animate__slow ">
                        <img className="w-[850px] " src={removeBg} alt="" />
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Banner;
