import React from "react";
import { UserContext } from "./UserContext";

function UserCounter(){
    const {totalUsers}=React.useContext(UserContext)
    return(
        <h3>Existen {totalUsers} clientes en la base de datos</h3>
    )
}

export {UserCounter}