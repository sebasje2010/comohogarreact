import React from "react";

function UserCounter({totalUsers}){
    return(
        <h3>Existen {totalUsers} clientes en la base de datos</h3>
    )
}

export {UserCounter}