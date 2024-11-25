import {Navigate, Outlet, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UserContext} from "../context/userContext.jsx";

const LayoutPrivate = () => {
    const {user} = useContext(UserContext)

    return (
        <div>
            <h1>Layout Privado</h1>
            {
                user? <Outlet />: <Navigate to="/"/>
            }
        </div>
    )
};

export default LayoutPrivate;
