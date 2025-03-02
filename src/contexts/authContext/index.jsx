import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import {onAuthStateChanged} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){ 
    const [currentUser, setCurrentUser] = useState(null);
    const [ussrLoggedIn, setussrLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    },[])

    async function initializeUser(user) {
        if(user){
            setCurrentUser({...user});
            setussrLoggedIn(true);
        }else{
            setCurrentUser(null);
            setussrLoggedIn(false);
        }
        setLoading(false);
    }
    const value = {
        currentUser,
        ussrLoggedIn,
        loading
    }

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
 }