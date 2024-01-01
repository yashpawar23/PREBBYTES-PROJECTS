import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchAxioscmp = () => {

    const [MyData,setMydata]=useState([])
    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then((response)=>response.json())
        // .then((response)=>console.log(response))
        // .catch((error)=>console.log(error))
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((Response)=>{
            console.log(Response)
            setMydata(Response.data)
        })
    },[])
  return (
    <>
    {MyData.map((Post)=>{
        const {id,name,email}=Post;
        return (

            <div>
                <p>{id}</p>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        )
    })}
    </>
  )
}

export default FetchAxioscmp