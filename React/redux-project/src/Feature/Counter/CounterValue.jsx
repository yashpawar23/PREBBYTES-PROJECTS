import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { increment,decrement } from './counterSlice';

const CounterValue = () => {
  const dispatch = useDispatch();
    const Data = useSelector((state)=>state.counter.value)
  return (
    <>
    <div>CounterValue : {Data}</div>
    <div>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
    </>
  )
}

export default CounterValue