import React from "react"
import { AppUI } from "./AppUI"

// const defaultusers=[
//   {name:'Monica Enriquez',email:'menriquez@abc.com',id:'123.456.789-00',phone:'(593)321654987', status: 'Active'},
//   {name:'Gabriel Simbaña',email:'menriquez@abc.com',id:'123.456.789-00',phone:'(593)321654987', status: 'Active'},
//   {name:'Christian García',email:'menriquez@abc.com',id:'123.456.789-00',phone:'(593)321654987', status: 'Active'},
// ]

function useLocalStorage(itemName,initialValue){
  const[loading,setLoading]=React.useState(true)
  const[error,setError]=React.useState(false)
  const [item,setItem]=React.useState(initialValue)
  React.useEffect(()=>{
    setTimeout(() => {
      try{
        const localStorageItem=localStorage.getItem(itemName)
        let parsedItem;
        
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem=initialValue
        }
        else{
          parsedItem=JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
      }
      catch(error){
        setError(error)
      }
    }, 1500); //Esto sirve para simular que esta leyendo una API
  })
  
  const saveItem=(newItem)=>{
    try{
      const stringifiedItem=JSON.stringify(newItem)
      localStorage.setItem(itemName,stringifiedItem)
      setItem(newItem)
    }
    catch(error){
      setError(error)
    }
  }
  return {
    item,
    saveItem,
    loading,
    error
  }
}

function App() {
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

  return (
    <AppUI 
      loading={loading}
      error={error}
      totalUsers={totalUsers}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedUsers={searchedUsers}
      deleteUser={deleteUser}
    />
  );
}

export default App;
