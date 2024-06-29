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
      const url = form.url.value;
      const email = form.email.value;
      const password = form.password.value;
      

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
                photoURL : url,
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
                          
                        </div>
                     </div>
                     <div>
                        <label className="text-white text-xs block mb-2">Photo Url</label>
                        <div className="relative flex items-center">
                           <input name="url" type="text" required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="(Photo)  Url" />
                         
                        </div>
                     </div>
                     <div className="mt-8">
                        <label className="text-white text-xs block mb-2">Email</label>
                        <div className="relative flex items-center">
                           <input name="email" type="text" required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter email" />
                        
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
                        <label className=" ml-3 block text-sm">
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
