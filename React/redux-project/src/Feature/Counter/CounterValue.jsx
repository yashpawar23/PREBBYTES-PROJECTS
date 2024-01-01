
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { incrementByAmount, } from './counterSlice';
import {setUserName} from '../User/UserSlice'

const CounterValue = () => {
  const dispatch = useDispatch();
    const Data = useSelector((state)=>state.counter.value)
    const userName = useSelector((state)=>state.user.name)

    

  return (
    <>
    <h1>Welcome  {userName}</h1>
    <div>CounterValue : {Data}</div>
    <div>
      <button onClick={()=>dispatch({type : 'counter/incrementAsync'})}>Increment</button>
      <button onClick={()=>dispatch({type : 'counter/decrementAsync'})}>Decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(2))}>ByNum</button>
      <button onClick={()=>dispatch(setUserName("pawar"))}>setName</button>
    </div>
    </>
  )
}

export default CounterValue