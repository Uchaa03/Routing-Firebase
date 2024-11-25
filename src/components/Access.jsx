import React from 'react'
import {NavLink} from "react-router-dom";

const Access = () => {
    return (
        (<>
            <NavLink to="/login">Login |</NavLink>
            <NavLink to="/registro">Registro |</NavLink>
        </>)    )
}
export default Access

