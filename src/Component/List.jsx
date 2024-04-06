import React, { useRef } from 'react'

const List = ({nisa}) => {
   let Name = useRef();
   let Phone=useRef();
   function handle()
   {
    let name=Name.current.value
    let phone=Phone.current.value
    // console.log(name);
    // console.log(phone);
    nisa(name,phone)
   }
  return (
    <div className='list'>
        <div>
        <input type='text' ref={Name}/><label>Enter the Name</label>
        </div>
        <div>
        <input type='number' ref={Phone}/><label>Enter the 10 digit phone no</label>
        </div>
        <button onClick={handle}>Add Contact</button>
    </div>
  )
}

export default List