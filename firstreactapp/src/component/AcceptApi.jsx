import React from 'react'
import { useContext } from 'react'
import { MyData } from './AddFile'

const AcceptApi = () => {
    const [ ApiData]=useContext(MyData)
  return (
    <div>
        {ApiData.map((data)=>{
            return (
                console.log(data)
            )
        })}
    </div>
  )
}

export default AcceptApi