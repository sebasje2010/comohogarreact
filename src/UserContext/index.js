import React from "react";
import {useLocalStorage} from './useLocalStorage'

const UserContext=React.createContext()

function UserProvider(props){
  const{
    item:users,
    saveItem:saveUsers,
    loading,
    error,
  }=useLocalStorage('IndexedDB',[])
  const [searchValue,setSearchValue]=React.useState('')
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

    return(
        <UserContext.Provider value={{
            loading,
            error,
            totalUsers,
            searchValue,
            setSearchValue,
            searchedUsers,
            deleteUser,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext,UserProvider}