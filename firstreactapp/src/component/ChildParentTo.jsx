import React from 'react'
import ChildB from './ChildB'

const ChildParentTo = () => {
    function getData(data){
        console.log(data)
    }
  return (
    <div>
        <ChildB getData={getData}/>
    </div>
  )
}

export default ChildParentTo