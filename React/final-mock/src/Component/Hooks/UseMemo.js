import React, { useMemo } from 'react'
import { useState } from 'react'

const UseMemo = () => {
  const [Data1,setData1]= useState(0)
  const [Data2,setData2]= useState(0)
  const MultiCountMemo  = useMemo(function MultiCount(){
    console.log("Multicount")
    return Data1 * 5
  },[Data1]) 
  // function MultiCount(){
  //   console.warn("MultiCount")
  //   return Data1 * 5
  // }
  return (
    <div>
      <h1>{Data1}</h1>
      <h1>{Data2}</h1>
      <h1>{MultiCountMemo}</h1>
      <button onClick={()=>setData1(Data1 + 1)}>Counter1</button>
      <button onClick={()=>setData2(Data2 + 1)}>Counter2</button>
    </div>
  )
}

export default UseMemo