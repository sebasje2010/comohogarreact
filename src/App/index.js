import React from "react"
import {UserProvider} from '../UserContext'
import { AppUI } from "./AppUI"
// const defaultusers=[
//   {name:'Monica Enriquez',email:'menriquez@abc.com',id:'123.456.789-00',phone:'(593)321654987', status: 'Active'},
//   {name:'Gabriel Simbaña',email:'menriquez@abc.com',id:'123.456.789-00',phone:'(593)321654987', status: 'Active'},
//   {name:'Christian García',email:'menriquez@abc.com',id:'123.456.789-00',phone:'(593)321654987', status: 'Active'},
// ]

function App() {
  return (
    <UserProvider>
      <AppUI/>
    </UserProvider>
  );
}

export default App;
