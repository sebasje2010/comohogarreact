import React from "react"
import {UserContext} from './UserContext'

function UserForm(){
  const [newUserName, setNewUserName]=React.useState('')
  const [newUserEmail, setNewUserEmail]=React.useState('')
  const [newUserID, setNewUserID]=React.useState('')
  const [newUserNumber, setNewUserNumber]=React.useState('')
  const [newUserStatus, setNewUserStatus]=React.useState('')
  const {
    addUser,
    setOpenModal
  }=React.useContext(UserContext)
  const onNameChange=(event)=>{
    setNewUserName(event.target.value)
  }
  const onEmailChange=(event)=>{
    setNewUserEmail(event.target.value)
  }
  const onIDChange=(event)=>{
    setNewUserID(event.target.value)
  }
  const onNumberChange=(event)=>{
    setNewUserNumber(event.target.value)
  }
  const onStatusChange=(event)=>{
    setNewUserStatus(event.target.value)
  }
  const onCancel=()=>{
    setOpenModal(prevState=>!prevState)
  }
  const onSubmit=(event)=>{
    event.preventDefault()
    setOpenModal(prevState=>!prevState)
    addUser(newUserName,newUserEmail,newUserID,newUserNumber,newUserStatus)
  }
  return(
    <form onSubmit={onSubmit}>
      <div className="newUser">
        <input type="text" name="Nombre" id="name" placeholder="Nombre" onChange={onNameChange} value={newUserName}/>
        <input type="email" name="Email" id="email" placeholder="e-mail" onChange={onEmailChange} value={newUserEmail}/>
        <input type="number" name="cedula" id="id" placeholder="Cédula" onChange={onIDChange} value={newUserID}/>
        <input type="tel" name="telefono" id="phone" placeholder="Teléfono" onChange={onNumberChange} value={newUserNumber}/>
        <input list="options" name="status" id="status" placeholder="Estado" onChange={onStatusChange} value={newUserStatus}/>
        <datalist id="options">
          <option value="Activo"/>
          <option value="Inactivo"/>
          <option value="Pendiente"/>
        </datalist>
      </div>
      <button 
        type="submit"
        className="solid-button"
      >Crear
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="white-button"
      >Regresar
      </button>
    </form>
  )
}
export {UserForm}

