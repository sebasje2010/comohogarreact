import React from "react";
import {UserCounter} from '../UserCounter'
import {UserSearch} from '../UserSearch'
import {CreateUser} from '../CreateUser'
import {User} from '../User'
import {UserList} from '../UserList'
const logo = require('./logo.png')

function AppUI({
    loading,
    error,
    totalUsers,
    searchValue,
    setSearchValue,
    searchedUsers,
    deleteUser
}){
    return(
        <React.Fragment>
        <div className="title">
            <img src={logo} alt="logo-persona" className="logo"/>
            <h2>Panel de Clientes</h2>
        </div>
        <UserCounter 
          total={totalUsers}
        />
        <div className="container">
          <div className="container-user">
              <h3>Lista de Usuario</h3>
              <p>Escoja un cliente para visualizar los detalles</p>
          </div>
          <CreateUser/>
        </div>
        <UserSearch 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <UserList>
          {error&&<p>Hubo un error</p>}
          {loading&&<p>Se está cargando la aplicación</p>}
          {(!loading&&!searchedUsers.length)&&<p>Por favor cree al primer usuario</p>}
          {searchedUsers.map(user=>(
            <User 
            key={user.name}
            name={user.name}
            email={user.email}
            id={user.id}
            phone={user.phone}
            status={user.status}
            onDelete={()=>deleteUser(user.name)}
            onEdit={()=>deleteUser(user.name)}
            />
          ))}
        </UserList>
    </React.Fragment>
    )
}

export {AppUI}