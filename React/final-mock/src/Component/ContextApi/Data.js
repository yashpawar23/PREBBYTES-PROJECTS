// import React, { createContext, useState } from 'react'
// import AcceptData from './AcceptData'

// const MyData = createContext()
// const Data = () => {
//     const [Detail,Setdetails] =useState({
//         Name:"YASH",
//         Batch:"EA17",
//         Age:23,
//         Course:"MERN STACK"
//     })
//   return (
//     <MyData.Provider value={[Detail]}>
//           <AcceptData/>
//     </MyData.Provider>
//   )
// }

// export default Data
// export {MyData}


import React, { createContext } from 'react'
import AcceptData from './AcceptData'
const MyData = createContext()

const Data = () => {
  const Data = {
    name:"yash pawar",
    batch : "EA17",
    course:"Mern Stack"
  }
  return (
    <MyData.provider value={[Data]}>
     <AcceptData/>
    </MyData.provider>
  )
}

export default Data
















