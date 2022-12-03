import React from "react";

function CreateUser(props){
    const onClickButton=()=>{
        props.setOpenModal(prevState=>!prevState)
    }
    return(
    <button 
        className="solid-button"
        onClick={onClickButton}
    >Nuevo cliente
    </button>
    )
}

export {CreateUser}