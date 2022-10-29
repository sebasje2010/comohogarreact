import React from "react";
import {UserContext} from '../UserContext'
import {UserCounter} from '../UserCounter'
import {UserSearch} from '../UserSearch'
import {UserList} from '../UserList'
import {User} from '../User'
import {CreateUser} from '../CreateUser'
import { Modal } from "../Modal";
const logo = require('./logo.png')

function AppUI(){
  const {
    error,
    loading,
    searchedUsers,
    deleteUser
  }=React.useContext(UserContext)
  return(
      <React.Fragment>
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
        <CreateUser/>
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
        onEdit={()=>deleteUser(user.name)}
        />
      ))}
    </UserList>
    <Modal>
    <div className="root">
        <div className="container">
            <div className="container-user">
                <h3>Lista de Usuario</h3>
                <p>Registre la siguiente informacion para crear un nuevo usuario:</p>
            </div>
        </div>
        <div>
            <div className="newUser">
                <input type="text" name="Nombre" id="name" placeholder="Nombre"/>
                <input type="email" name="Email" id="email" placeholder="e-mail"/>
                <input type="number" name="cedula" id="id" placeholder="Cédula"/>
                <input type="tel" name="telefono" id="phone" placeholder="Teléfono"/>
                <input list="options" name="status" id="status" placeholder="Estado"/>
                    <datalist id="options">
                        <option value="Activo"/>
                        <option value="Inactivo"/>
                        <option value="Pendiente"/>
                    </datalist>
            </div>
            <div className="Submit">
                <input type="button" value="Crear" className="solid-button"/>
                <input type="button" value="Regresar" className="white-button"/>
            </div>
        </div>
    </div>
    </Modal>
  </React.Fragment>
  )
}

export {AppUI}