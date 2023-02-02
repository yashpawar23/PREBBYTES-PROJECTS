import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';

const CounterPost = () => {
  const dispatch = useDispatch();
    const Data = useSelector((state)=>state.counter.value)
  return (
    <>
    <div>CounterPost : {Data}</div>
    <div>
      <button onClick={()=>addpost()}>Increment</button>
    </div>
    </>
  )
}

export default CounterPost