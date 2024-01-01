import React, { useContext } from 'react'
import { MyData } from './Data'

const AcceptData = () => {
    const [Data] = useContext(MyData)
    console.log(Data)
  return (
    <div>
        
        {Data.Name}<br/>
        {Data.Batch}
    </div>
  )
}

export default AcceptData