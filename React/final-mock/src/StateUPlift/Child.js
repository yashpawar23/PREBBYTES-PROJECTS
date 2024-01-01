import React, { useState } from 'react'

const Child = ({getColor}) => {
    // const [name,setName]=useState()
    // function handleClick (e){
    //  e.preventDefault();
    //  props.getData(name)
    // }
    const [activecolor,setActivecolor] = useState('')
    const handlechange = (e)=>{
       const Data = e.target.value
       setActivecolor(Data)
       getColor(Data)

    }
  return (
    <div>
      <input
        type='text'
        id='input'
        onChange={handlechange}
        value={activecolor}
      />
        {/* <form onSubmit={handleClick}>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <button>Submit</button>
        </form> */}
    </div>
  )
}

export default Child