import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Chilld from './Child'

const Axios = () => {
    const [userData,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{console.log(response)
            setData(response.data)}
        )
    },[])
  return (
    <div>{
        userData.map((e)=>{
            return(
                <>
                <h3>{e.name}</h3>
                </>
            )
        })
        }
        <Chilld value={userData}/>
        
        </div>
  )
}

export default Axios