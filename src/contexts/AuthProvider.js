import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user with email and pass 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in with email and pass
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    // to login with login
    const googleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // to logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // to update  user name
    const updateUser = (userDetails) => {
        return updateProfile(auth.currentUser, userDetails)
    }


    //to set observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User on state change');
            setUser(currentUser);
            setLoading(false)
        });
        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        googleLogin,
        updateUser,
        logOut,


    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;