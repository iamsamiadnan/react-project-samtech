import React, { createContext, useEffect, useState } from 'react'
import app from '../config/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false)
        console.log('current user'  , currentUser)
      })

      return () => unsubscribe();
    }, [])

    const createUser = (email, pass) => {
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const signInUser = (email, pass) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, pass);
    }

    const signInGoogleUser = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
      setLoading(true)
      return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInGoogleUser,
        signOutUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
