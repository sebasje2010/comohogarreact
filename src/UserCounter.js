import React from "react";

function UserCounter(props){
    return(
        <h3>Existen {props.total} clientes en la base de datos</h3>
    )
}

export {UserCounter}