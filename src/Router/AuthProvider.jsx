import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/Firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);
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
   const logOut = ()=>{
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
      logOut,
   };

   
   return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
