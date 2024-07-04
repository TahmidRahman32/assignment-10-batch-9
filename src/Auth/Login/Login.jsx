import { useContext, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Router/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
const Login = () => {
   const [showPass, setShowPass] = useState(false);
   const { Login, googleLogin, gitHubLogin } = useContext(AuthContext);
   const [logError, setLogError] = useState("");
   const [loginMassage, setLoginMassage] = useState("");

   const location = useLocation();
   const handleLogInBtn = (e) => {
      e.preventDefault();

      const form = e.target;

      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);

      Login(email, password)
         .then((result) => {
            console.log(result.user);
            setLoginMassage("Login successfully");
            Navigate(location?.state ? location?.state : "/");
         })
         .catch((error) => {
            console.log(error);
            setLogError(error.code);
         });
   };
 const handleGoogleBtn = () => {
   googleLogin()
      .then((result) => {
         console.log(result.user);
      })
      .catch((error) => {
         console.log(error);
      });
 };
 const handleGithubBtn = () => {
   gitHubLogin()
      .then((result) => {
         console.log(result.user);
      })
      .catch((error) => {
         console.log(error);
      });
 };
   return (
      <div className="font-[sans-serif] bg-gray-500 md:h-screen">
         <div className="grid md:grid-cols-2 items-center h-full">
            <div className="max-md:order-1 p-4">
               <img src="https://readymadeui.com/signin-image.webp" className="lg:max-w-[70%] w-full h-full object-contain block mx-auto" alt="login-image" />
            </div>

            <div className="flex items-center md:p-8 p-6  h-full lg:w-3/5 lg:mx-auto ">
               <div onSubmit={handleLogInBtn} className="max-w-3xl w-full mx-auto">
                  <form>
                     <div className="mb-12">
                        <div>
                           {logError && (
                              <div className="text-center">
                                 <p className="text-red-700 font-bold font-fStyle">Please Check Your password</p> <p>{logError}</p>
                              </div>
                           )}
                        </div>
                        <div>
                           {loginMassage && (
                              <div className="text-center">
                                 <p className="text-green-600 text-xl font-bold font-fStyle">{loginMassage}</p>
                              </div>
                           )}
                        </div>
                        <h3 className="text-4xl font-bold text-yellow-500">LogIn Now!!</h3>
                     </div>

                     {/* <div>
                     <label className="text-white text-xs block mb-2">Full Name</label>
                     <div className="relative flex items-center">
                        <input name="name" type="text" required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-500 px-2 py-3 outline-none" placeholder="Enter name" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                           <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                           <path
                              d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                              data-original="#000000"
                           ></path>
                        </svg>
                     </div>
                  </div> */}
                     <div className="mt-8">
                        <label className="text-white text-xs block mb-2">Email</label>
                        <div className="relative flex items-center">
                           <input name="email" type="text" required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter email" />
                           <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                              <defs>
                                 <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                 </clipPath>
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
                           <input
                              name="password"
                              type={showPass ? "text" : "password"}
                              required
                              className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none"
                              placeholder="Enter password"
                           />
                           <span className="absolute bottom-4  right-3" onClick={() => setShowPass(!showPass)}>
                              {showPass ? <FaEyeSlash size={20} color="#ffff" /> : <IoEyeSharp size={20} color="#ffff" />}
                           </span>
                           {/*  */}
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
                        <button className="my-4 relative inline-flex items-center justify-start inline-block px-8 py-2 overflow-hidden font-medium transition-all bg-yellow-600 rounded-full hover:bg-white group">
                           <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                           <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-yellow-500">Login</span>
                        </button>

                        <p className="text-sm text-white mt-8">
                           Please SignUp now!{" "}
                           <Link to={"/signup"} href="javascript:void(0);" className="text-yellow-400 font-semibold hover:underline ml-1">
                              Register page
                           </Link>
                        </p>
                     </div>
                  </form>
                  <div className="flex gap-4 justify-center ">
                     <button onClick={handleGoogleBtn} className="rounded-full my-6 bg-white p-2">
                        <FcGoogle size={30} />
                     </button>
                     <button onClick={handleGithubBtn} className="rounded-full my-6 bg-white p-2 text-black">
                        <FaGithub size={30} />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
