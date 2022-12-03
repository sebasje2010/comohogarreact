import React from "react"
import {useUsers} from './useUsers'
import {UserHeader} from "../UserHeader"
import {UserCounter} from '../UserCounter'
import {UserSearch} from '../UserSearch'
import {UserList} from '../UserList'
import {User} from '../User'
import {UserForm} from '../UserForm'
import {CreateUser} from '../CreateUser'
import { Modal } from "../Modal";
const logo = require('./logo.png')
// const defaultusers=[
//   {name:'Monica Enriquez',email:'menriquez@abc.com',id:'123.456.789-00',phone:'(593)321654987', status: 'Active'},
//   {name:'Gabriel Simbaña',email:'menriquez@abc.com',id:'123.456.789-00',phone:'(593)321654987', status: 'Active'},
//   {name:'Christian García',email:'menriquez@abc.com',id:'123.456.789-00',phone:'(593)321654987', status: 'Active'},
// ]

function App() {
  const {
    error,
    loading,
    searchedUsers,
    deleteUser,
    editUser,
    openModal,
    setOpenModal,
    searchValue,
    setSearchValue,
    totalUsers,
    addUser
  }=useUsers()
  return(
    <React.Fragment>
      {!openModal&&(
        <div>
          <UserHeader>
            <div className="title">
            <img src={logo} alt="logo-persona" className="logo"/>
            <h2>Panel de Clientes</h2>
          </div>
          <UserCounter
            totalUsers={totalUsers}
          />
          <div className="container">
            <div className="container-user">
              <h3>Lista de Usuario</h3>
              <p>Escoja un cliente para visualizar los detalles</p>
            </div>
            <CreateUser
              setOpenModal={setOpenModal}
            />
          </div>
          <UserSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          </UserHeader>
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
              <UserForm 
                addUser={addUser}
                setOpenModal={setOpenModal}
              />            
            </div>
          </div>
        </Modal>
      )}
    </React.Fragment>
  )
}

export default App;
