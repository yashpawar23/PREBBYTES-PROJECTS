import React, { useState } from 'react'
import Child from './Child'
import './Style.css'

const Parent = () => {
  const [UIcolor,setUIColor] = useState(null)
    function getColor(color){
      setUIColor(color)
        console.log(color)
    }
  return (
    <div className='App'>
      <div className='App_color_container' style={{background : `${UIcolor}`}}></div>
        <Child getColor={getColor}/>
    </div>
  )
}

export default Parent