import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


   const user = "shuvo";

   const  createUserByGoogle = () => {
     return signInWithPopup(auth, googleProvider)
   }

   const createUserByGithub = () => {
    return signInWithPopup(auth, githubProvider)
   }

   const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
   }

   const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
   }


   const authInfo = {
    user,
    createUserByGoogle,
    createUserByGithub,
    createUser,
    signIn
   }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;