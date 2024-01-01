import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {
    const [Data,setData] = useState(0)

    useEffect(()=>{
        const cleanIntervalId = setInterval(()=>{
            console.log("hellow CleanUp")
        },2000)

        return ()=>{
              clearInterval(cleanIntervalId)
        };
    },[Data])
  return (
    <div>
        <h1>{Data}</h1>
        <button onClick={()=>setData(Data + 1)}>Increase</button>
    </div>
  )
}

export default UseEffectCleanUp