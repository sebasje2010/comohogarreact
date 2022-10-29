import React from "react";
import { UserContext } from "./UserContext";

function UserSearch(){
    const {searchValue,setSearchValue}=React.useContext(UserContext)
    const onSearchValueChange=(event)=>{
        setSearchValue(event.target.value)}
    return(
        <input 
            className="UserSearch"
            placeholder='Filtrar por Nombre'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}

export {UserSearch}