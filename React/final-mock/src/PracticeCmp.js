import React, { useState } from 'react'

const arr = ["Play cricket ", "Reading Book", "Go to Party"]
const PracticeCmp = () => {

  const [array, setArray] = useState(arr)
  const deleteTask = (itemindex) => {
    // let newArray = array
    
    let filterArray = array.filter( (item,i) => {
      return (i !== itemindex)
    })
    setArray(filterArray)
  };
  return (
   <div>
     <ul>
        {
          array.map((task, index) => {
            return (
              <li>
                {task}
                <button onClick={() => deleteTask(index)}>Delete task</button>
              </li>
            )


          })
        }
      </ul>
   </div>
  )
}

export default PracticeCmp