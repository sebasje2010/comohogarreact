import React from "react";

function UserSearch({searchValue,setSearchValue}){
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