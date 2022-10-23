import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateName = name => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name})
    }

    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( () => {
        const unsubsCribe = onAuthStateChanged(auth, userCurrent => {
            setUser(userCurrent)
            setLoading(false)
        })
        return () => unsubsCribe()
    }, [])
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {user, loading, createUser, updateName, loginUser, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;