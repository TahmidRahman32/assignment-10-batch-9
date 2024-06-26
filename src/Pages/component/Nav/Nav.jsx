import {  useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
// import { AuthContext } from "../../Route/AuthProvider";
import Swal from "sweetalert2";

const Nav = () => {
   const user = 1
   const [theme, setTheme] = useState("light");
   // const { user, logOut } = useContext(AuthContext);

   const handleSignOut = () => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Logout",
      }).then((result) => {
         if (result.isConfirmed) {
            Swal.fire({
               title: "Logout!",
               text: "You are logged out",
               icon: "success",
            });
            // logOut()
            //    .then({})
            //    .catch((error) => {
            //       console.log(error);
            //    });
         }
      });
   };

   const navLinks = (
      <>
         <div className=" md:flex space-x-3 lg:gap-4 md:gap-3 gap-2 lg:items-center">
            <NavLink to={"/"} className={({ isActive }) => (isActive ? "text-primary underline font-bold md:text-xl font-fStyle " : "font-bold md:text-xl font-fStyle")}>
               Home
            </NavLink>
            <NavLink to={"/about"} className={({ isActive }) => (isActive ? "text-primary underline font-bold md:text-xl font-fStyle" : "font-bold md:text-xl font-fStyle")}>
               AllArt&craftItems
            </NavLink>

            {user && (
               <NavLink to={"/order"} className={({ isActive }) => (isActive ? "text-primary underline font-bold md:text-xl font-fStyle" : "font-bold md:text-xl font-fStyle")}>
                  AddCraftItem
               </NavLink>
            )}
            {user && (
               <NavLink to={"/profile"} className={({ isActive }) => (isActive ? "text-primary underline font-bold md:text-xl font-fStyle" : "font-bold md:text-xl font-fStyle")}>
                  MyArt&CraftList
               </NavLink>
            )}

            <div>
               {user?.email ? (
                  <NavLink onClick={handleSignOut} to={"/logIn"} className={({ isActive }) => (isActive ? "text-primary underline font-bold md:text-xl font-fStyle" : "font-bold md:text-xl font-fStyle")}>
                     LogUot
                  </NavLink>
               ) : (
                  <NavLink to={"/login"} className={({ isActive }) => (isActive ? "text-primary underline font-bold md:text-xl font-fStyle" : "font-bold md:text-xl font-fStyle")}>
                     LogIn
                  </NavLink>
               )}
            </div>
            <NavLink to={"/signUp"} className={({ isActive }) => (isActive ? "text-primary underline font-bold md:text-xl font-fStyle" : "font-bold md:text-xl font-fStyle")}>
               SignUp
            </NavLink>
         </div>
      </>
   );

   const handleThemeBtn = (e) => {
      if (e.target.checked) {
         setTheme("dark");
      } else {
         setTheme("light");
      }
   };

   useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
   }, [theme]);
   return (
      <div className="navbar bg-base-100 shadow-y md:mb-0 mb-20">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
               </div>
               <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
               </ul>
            </div>

            <img
               className={theme === "dark" ? " w-48 py-2 my-1  px-2 bg-white rounded-xl" : "w-48"}
               src="https://jewellerycityweb.thimaqua.info/wp-content/uploads/elementor/thumbs/xlogo--q5ow6jiawhg3irw2fr05yiyms3hi8fivtf3gcisfls.png.pagespeed.ic.2ZsKPWIimf.png"
               alt=""
            />
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
         </div>
         <div className="navbar-end ">
            {/* profile */}

            <div className="md:text-center hidden md:flex">
               <div>
                  <h2 className="font-bold">{user?.displayName}</h2>
                  <h2>{user?.email}</h2>
               </div>
            </div>

            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
               <div className={user?.photoURL && "w-10 rounded-full"}>
                  <img src={user?.photoURL || null} />
               </div>
            </div>

            {/* theme toggle */}
            <label className="cursor-pointer grid place-items-center ml-2">
               <input onChange={handleThemeBtn} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
               <svg
                  className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
               </svg>
               <svg
                  className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
               </svg>
            </label>
         </div>
      </div>
   );
};

export default Nav;
