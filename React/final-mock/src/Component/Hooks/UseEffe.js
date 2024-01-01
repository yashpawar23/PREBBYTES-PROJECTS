import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffe = () => {
    const [Data,setData] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setData((Data)=> Data + 1)
        },1000)
        
    },[])
  return (
    <div>
       <h1>Counter :-{Data}</h1> 
    </div>
  )
}

export default UseEffe