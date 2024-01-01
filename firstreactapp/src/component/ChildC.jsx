import React, { useContext } from 'react'
import { Data,Data1 } from './UseContextcmp'

const ChildC = () => {
    const name = useContext(Data)
const email = useContext(Data1)
  return (
    <div>My Nme id {name}</div>
  )
}

export default ChildC