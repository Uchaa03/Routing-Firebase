import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../context/userContext.jsx";
import {logout} from "../config/Firebase.jsx";
import Access from "./Access.jsx";

const Navbar = () => {
    const {user , setUser} = useContext(UserContext)

    const handleLogout = async () => {
        await logout()
        setUser(false)
    }

    return (
        <nav>
            <NavLink to="/">Home |</NavLink>
            {
                user && <NavLink to="/dashboard">Dashboard |</NavLink>
            }
            {
                user ? ( <NavLink onClick={handleLogout} to="">Cerrar Sesión</NavLink>):
                    (<Access/>)
            }
        </nav>
    );
};

export default Navbar;
