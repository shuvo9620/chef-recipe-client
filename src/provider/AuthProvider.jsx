import React, { createContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

   const user = "abal shuvo";

   const  createUserByGoogle = ()=>{
     return signInWithPopup(auth, googleProvider)
   }

   const authInfo = {
    user,
    createUserByGoogle
   }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;