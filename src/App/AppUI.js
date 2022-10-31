import React from "react";
import {UserContext} from '../UserContext'
import {UserCounter} from '../UserCounter'
import {UserSearch} from '../UserSearch'
import {UserList} from '../UserList'
import {UserForm} from '../UserForm'
import {User} from '../User'
import {CreateUser} from '../CreateUser'
import { Modal } from "../Modal";
const logo = require('./logo.png')

function AppUI(){
  const {
    error,
    loading,
    searchedUsers,
    deleteUser,
    editUser,
    openModal,
    setOpenModal,
  }=React.useContext(UserContext)
  return(
    <React.Fragment>
      {!openModal&&(
        <div>
          <div className="title">
            <img src={logo} alt="logo-persona" className="logo"/>
            <h2>Panel de Clientes</h2>
          </div>
          <UserCounter/>
          <div className="container">
            <div className="container-user">
              <h3>Lista de Usuario</h3>
              <p>Escoja un cliente para visualizar los detalles</p>
            </div>
            <CreateUser
              setOpenModal={setOpenModal}
            />
          </div>
          <UserSearch/>
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
              onEdit={()=>editUser(user.name)}
              />
            ))}
          </UserList>
        </div>
      )}
      {!!openModal&&(
        <Modal>
          <div className="root">
            <div className="container">
              <div className="container-user">
                <h3>Lista de Usuario</h3>
                <p>Registre la siguiente informacion para crear un nuevo usuario:</p>
              </div>
            </div>
            <div>
              <UserForm/>            
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  )
}

export {AppUI}