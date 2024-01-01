// import React, { useReducer } from 'react'

// const initialstate = 0
// const reducer = (state,action)=>{
//    switch(action){
//     case "Increment" :
//     return state + 1
//     case "Decrement" : 
//     return state - 1
//    }
// }
// const UseReducer = () => {
//         const [Count , setCount] = useReducer(reducer,initialstate)
//   return (
//     <div>
//         <h6>{Count  }</h6>
//         <button onClick={()=>{setCount("Increment")}}>Inc</button>
//         <button onClick={()=>{setCount("Decrement")}}>Inc</button>
//     </div>
//   )
// }

// export default UseReducer

import React, { useReducer } from 'react'
 let initialstate = 0;
const reducer = (state,action)=>{
  if(action.type === "Increment"){
    return state + 1
  } if(action.type === "Decrement"){
    return state - 1
  }
  else{
    return state
  }
    // switch(action){
    //   case  "Increment" :
    //   return state + 1
    //   case  "Decrement" :
    //   return state - 1
    // }
}

const UseReducer = () => {
  const [Data,setData] = useReducer(reducer,initialstate)
  return (
    <div>
      <h1>{Data}</h1>
      <button onClick={()=>{setData({type : "Increment"})}}>Inrement</button>
      <button onClick={()=>{setData({type:"Decrement"})}}>Derement</button>
    </div>
  )
}

export default UseReducer