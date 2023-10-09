import React, { createContext, useEffect, useState } from 'react'
import app from '../config/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"

export const AuthContext = createContext()
const auth = getAuth(app)

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user'  , currentUser)
      })

      return () => unsubscribe();
    }, [])
    const createUser = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const signInUser = (email, pass) => {
      return signInWithEmailAndPassword(auth, email, pass);
    }

    const signOutUser = () => {
      return signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
