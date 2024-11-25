import {useContext} from "react";
import {UserContext} from "../context/userContext.jsx";

const Dashboard = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <div>
            <h1>Dashboard</h1>
            {
                user && (<p>Bienvenido: {user.name}</p>)
            }
        </div>
    )

};

export default Dashboard;
