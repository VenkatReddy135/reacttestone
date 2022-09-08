import React, { useState } from 'react'

export default function Button({title}) {
    const [state,setState]=useState('hello world')
    const [toogle,setToogle]=useState(false)
 
    const add=()=>{
    setToogle(!toogle)
    if(toogle){
        setState('hello world')
    }else{
        setState('My world')
    }
    }
  return (
    
    <div>
      <h1>{state}</h1>
      <button onClick={add}>{title}</button>
    </div>
  )
}
