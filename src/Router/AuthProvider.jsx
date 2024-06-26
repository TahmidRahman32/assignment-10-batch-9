import { getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/Firebase.config";

const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
   const [user, setUser] = useState([]);

   

   const userInfo = {
      user,
   };
   return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
