import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import App from "../components/Firebase/firebase.config";

const auth = getAuth(App);
export const authContext = createContext(null)

const AuthProviders = ({children}) => {

    const [ user, setUser ] = useState(null);
    const [ loading, setLoading ] = useState(true)

    const createUser = (email, password)  => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = ( email, password ) => {
        setLoading(true);
        return signInWithEmailAndPassword( auth, email, password);
    }

    const authInfo = {
        user,
        loading, 
        createUser,
        signInUser
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProviders;