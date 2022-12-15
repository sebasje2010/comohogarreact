import React from "react";

function UserCounter({totalUsers,loading}){
    return(
        <h3
            className={`UserCounter ${!!loading &&'UserCounter--loading'}`}
        >
            Existen {totalUsers} clientes en la base de datos
        </h3>
    )
}

export {UserCounter}