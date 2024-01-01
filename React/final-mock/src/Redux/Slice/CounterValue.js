import React from 'react'
import { Increment,Decrement } from './CounterSlice'
import { useSelector,useDispatch } from 'react-redux'


const CounterValue = () => {
    const Dispatch = useDispatch()
    const Count = useSelector((state) => state.counter.value)
  return (
    <div>
       <h1>{Count}</h1>
       <button onClick={()=>Dispatch(Increment())}>Increment</button>
       <button onClick={()=>Dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default CounterValue