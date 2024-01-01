import React, { useState } from 'react'

const Render = () => {
    const [data , setData] = useState([
        {id:1,name:"yash",age:23},
        {id:2,name:"urvi",age:3},
        {id:3,name:"jay",age:23}
    ])
    console.log(data)
    let Deletename = (id)=>{
        let newData = data.filter(data =>data.id!== id)
        setData(newData)
    }
  return (
    <div>
        <ul>
        {
            data.map((item,index)=>{
                return (
                   <>
                    <li>My Name is {item.name} and my age is {item.age}</li>
                    <button onClick={()=>Deletename(item.id)}>Delete</button>
                   </>
                )
            })
        }
        </ul>
    </div>
  )
}

export default Render