import React, {createContext, useEffect, useState} from 'react';
import {getAuth} from "firebase/auth";
import {onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext(false)

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else { }
        });
    },[])

    if (user === null) return <p>Loading...</p>

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
