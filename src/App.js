import React, { useState } from 'react'
import List from './Component/List'
import Container from './Component/Container';
import './App.css'
const App = () => {
    let [data,setdata]=useState([])
  function nisa(name,phone)
  {
   console.log(name);
   console.log(phone);
   let obj={
       Name:name,
       Phone:phone
   }
   setdata([...data,obj])
  }
  return (
    <div className='img'>
       <div className='App'>
      <List nisa={nisa}/>
      {
        data.map((items,key)=>
        ( <Container data={items}/>))

      }
      
    </div>
    </div>
  )
}

export default App