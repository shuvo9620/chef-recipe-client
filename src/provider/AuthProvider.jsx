import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null);

    const createUserByGoogle = () => {
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

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])



    const authInfo = {
        user,
        createUserByGoogle,
        createUserByGithub,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;