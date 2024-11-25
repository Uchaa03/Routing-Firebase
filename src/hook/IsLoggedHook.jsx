import React, {useContext, useEffect} from 'react'
import {UserContext} from "../context/userContext.jsx";
import {useNavigate} from "react-router-dom";

const IsLoggedHook = () => {
    const {user} = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(() =>{
        if (user) {
            return navigate("/dashboard")
        }
    }, [user])
}
export default IsLoggedHook
