import React, { useState } from 'react'

const App = () => {
  const[checked,setchecked]=useState(false)
  const checkBox =()=>{
  setchecked(!checked)
  consoleInfo(checked)
     
  }
  const consoleInfo=(checked)=>{
    !checked ? console.log("checked") : console.log("not checked")
  }
  return (
   <div className='body'>

    
    <input  onChange={checkBox} checked={checked} type="checkbox"/>
   

   <div className='body-info'>
       <h1>Verified by ConQt</h1>
       <h2>Check when product is verified by ConQt</h2>
    </div>
     
   
   </div>
  )
}

export default App