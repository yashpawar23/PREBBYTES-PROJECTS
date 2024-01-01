import { current } from '@reduxjs/toolkit'
import React, {  useEffect, useRef, useState } from 'react'

const UseRef = () => {
  const [data,setData] = useState('')
  const [count,setCount] = useState(0)
  const Ref = useRef(0)
  useEffect(()=>{
    Ref.current = Ref.current +1
    // setCount(count + 1)
  },)
    // const name = useRef()
    // const email = useRef()

    // const handleClick = ()=>{
    //     const Data1 = name.current.value
    //     const Data2 = email.current.value
    //     console.log(Data1,Data2)
    // }
    
  return (
    <div>
      <h1>{data}</h1>
      <input type="name" value={data} onChange={(e)=>setData(e.target.value)}/>
      <h1>{Ref.current}</h1>
        {/* <input type='name' ref={name}></input>
        <input type='email' ref={email}></input>
        <input type='submit' onClick={handleClick}></input> */}
    </div>
  )
}

export default UseRef