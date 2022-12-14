import React from "react";
import {useLocalStorage} from './useLocalStorage'

function useUsers(){
  const{
    item:users,
    saveItem:saveUsers,
    loading,
    error,
  }=useLocalStorage('IndexedDB',[])
  const [searchValue,setSearchValue]=React.useState('')
  const [openModal,setOpenModal]=React.useState(false)
  const totalUsers=users.length
  let searchedUsers=[]
  if(!searchValue.length>=1){
    searchedUsers=users
  }
  else{
    searchedUsers=users.filter(user => {
      const userText=user.name.toLowerCase()
      const searchText=searchValue.toLowerCase()
      return userText.includes(searchText)
    })
  }

  const deleteUser=(name)=>{
    const userIndex=users.findIndex(user=>user.name===name)
    const newUsers=[...users]
    newUsers.splice(userIndex,1)
    saveUsers(newUsers)
  }

  const editUser=(name)=>{
    const newUsers=[...users]
    const userIndex=users.findIndex(user=>user.name===name)
    newUsers.splice(userIndex,1)
    saveUsers(newUsers)
  }

  const addUser=(newUserName,newUserEmail,newUserID,newUserNumber,newUserStatus)=>{
    const newUsers=[...users]
    newUsers.push({name:newUserName,email:newUserEmail,id:newUserID,phone:newUserNumber, status: newUserStatus})
    saveUsers(newUsers)
  }
  
  return{
    loading,
    error,
    totalUsers,
    searchValue,
    setSearchValue,
    searchedUsers,
    deleteUser,
    editUser,
    addUser,
    openModal,
    setOpenModal
  }
}

export {useUsers}