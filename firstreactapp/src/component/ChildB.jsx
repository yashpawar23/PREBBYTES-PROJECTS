import React, { useState } from 'react'
import { Form } from 'react-router-dom';

const ChildB = () => {
    const [Data,setData]=useState();
   function handleSubmit(){
      e.prevenDefault()
      props.getData(Data)
    }
  return (
    <Form onSubmit={handleSubmit}>
        <input type='text' value={Data} onChange={(e)=>{setData(e.target.value)}}/> 
        <button>Submit</button>
    </Form>
  )
}

export default ChildB