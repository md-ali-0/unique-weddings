import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app)
    const googleAuthProvider = new GoogleAuthProvider;

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider);
    }
    const createLogin =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email, password)
    }
    const createRegistration =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const createSignOut =()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        };
    },[])

    const authInfo = {
        user,
        loading,
        createLogin,
        createRegistration,
        createSignOut,
        signInWithGoogle,
        setLoading,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;