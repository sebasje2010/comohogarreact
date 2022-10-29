import React from "react";

function CreateUser(){
    const onClickButton=()=>{
        
    }
    return(
    <button 
    className="solid-button"
    onClick={()=>onClickButton}
    >
        Nuevo cliente
    </button>
    )
}

export {CreateUser}