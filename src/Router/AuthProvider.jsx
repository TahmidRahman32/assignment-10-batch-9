import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState([]);
   const [loading, setLoading] = useState(true)

   const createUser = (email, password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email,password)

   }

   const Login = (email, password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const googleLogin = () =>{
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
   }
   const logOut = ()=>{
      setLoading(true)
      return signOut(auth)
   }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
       });
       return () => {
          unSubscribe();
       };
    }, []);
   const userInfo = {
      user,
      loading,
      createUser,
      Login,
      googleLogin,
      logOut,
   };

   
   return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
