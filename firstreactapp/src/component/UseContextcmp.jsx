import React, { createContext } from 'react'
const Data = createContext()
    const Data1 = createContext()
const UseContextcmp = () => {

    const name ="yash"
    const email = "pawar@123.gmail.com"
     
  return (
    <div>
        <Data.Provider value={name}>
            <Data1.Provider value={email}>
                <UseContextcmp/>
            </Data1.Provider>
        </Data.Provider>
    </div>
  )
}

export default UseContextcmp
export {Data,Data1}