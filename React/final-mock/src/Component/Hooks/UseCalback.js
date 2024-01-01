import React, { useCallback, useState } from 'react'
import ChildCllback from './ChildCllback'

const UseCalback = () => {
    const[Data,setData] = useState(0)
    const Learning = useCallback(()=>{
     
    },[Data])
   
  return (
    <div>
        <ChildCllback Learning={Learning}/>
        {Data}
        <button onClick={()=>setData(Data + 1)}>Inc</button>
    </div>
  )
}

export default UseCalback