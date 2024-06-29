import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Signup = () => {
   const [showPass, setShowPass] = useState(false);
   const [registerError, setRegisterError] = useState("");
   const [registerMassage, setRegisterMassage] = useState("");
   const { createUser } = useContext(AuthContext);
   const navigate = useNavigate();
   const handleSignUpBtn = (e) => {
      e.preventDefault();

      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, email, password);

        if (password.length < 6) {
           toast.error("password must be 6 character");
           return;
        } else if (!/[A-Z]/.test(password)) {
           toast.error("please add one uppercase");
           return;
        } else if (!/[a-z]/.test(password)) {
           toast.error("please add one lowercase");
           return;
        }
        

      createUser(email, password)
         .then((result) => {
            console.log(result.user);
            console.log(result.user);
            setRegisterMassage("User create a successfully");
            updateProfile(result.user, {
               displayName: name,
             
            })
               .then(() => {
                  console.log("name is done");
               })
               .catch(() => {});
                navigate("/");
         })
         .catch((error) => {
            console.log(error);
            setRegisterError(error.code);
         });
   };
   return (
      <div>
         <div className="font-[sans-serif] bg-white md:h-screen">
            <div className="grid md:grid-cols-2 items-center gap-8 h-full">
               <div className="max-md:order-1 p-4">
                  <img src="https://readymadeui.com/signin-image.webp" className="lg:max-w-[85%] w-full h-full object-contain block mx-auto" alt="login-image" />
               </div>

               <div className="flex items-center md:p-8 p-6  h-full lg:w-11/12 lg:ml-auto">
                  <form onSubmit={handleSignUpBtn} className="max-w-lg w-full mx-auto">
                     <div className="">
                        <div>
                           {registerError && (
                              <div className="">
                                 <p className="text-red-600 text-2xl font-bold font-fStyle">{registerError}</p>
                              </div>
                           )}
                        </div>
                        <div>
                           {registerMassage && (
                              <div className="">
                                 <p className="text-green-600 text-2xl font-bold font-fStyle">{registerMassage}</p>
                              </div>
                           )}
                        </div>
                        <h3 className="text-4xl font-bold text-yellow-500">Create an account</h3>
                     </div>

                     <div>
                        <label className="text-white text-xs block mb-2">Full Name</label>
                        <div className="relative flex items-center">
                           <input name="name" type="text" required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter name" />
                           <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                              <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                              <path
                                 d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                 data-original="#000000"
                              ></path>
                           </svg>
                        </div>
                     </div>
                     <div className="mt-8">
                        <label className="text-white text-xs block mb-2">Email</label>
                        <div className="relative flex items-center">
                           <input name="email" type="text" required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter email" />
                           <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                              <defs>
                                 {/* <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                 </clipPath> */}
                              </defs>
                              <g transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                 <path fill="none" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                 <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                              </g>
                           </svg>
                        </div>
                     </div>
                     <div className="mt-8">
                        <label className="text-white text-xs block mb-2">Password</label>
                        <div className="relative flex items-center">
                           <input name="password" type={showPass ? "text" : "password"} required className="w-full bg-transparent text-sm  border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter password" />
                           <span className="absolute bottom-3  right-3" onClick={() => setShowPass(!showPass)}>
                              {showPass ? <FaEyeSlash size={20} /> : <IoEyeSharp size={20} />}
                           </span>
                        </div>
                     </div>

                     <div className="flex items-center mt-8">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
                        <label className="text-white ml-3 block text-sm">
                           I accept the{" "}
                           <a href="javascript:void(0);" className="text-yellow-500 font-semibold hover:underline ml-1">
                              Terms and Conditions
                           </a>
                        </label>
                     </div>

                     <div className="mt-12">
                        <button className="my-4 relative inline-flex items-center justify-start inline-block px-5 py-2 overflow-hidden font-medium transition-all bg-yellow-600 rounded-full hover:bg-white group border border-yellow-400">
                           <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                           <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-yellow-500">Register</span>
                        </button>
                        <p className="text-sm  mt-8">
                           Already have an account?{" "}
                           <Link to={"/login"} href="javascript:void(0);" className="text-yellow-400 font-semibold hover:underline ml-1">
                              Login here
                           </Link>
                        </p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Signup;
