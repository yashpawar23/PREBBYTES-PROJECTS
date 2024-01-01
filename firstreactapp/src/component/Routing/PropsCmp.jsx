import React from 'react'

const PropsCmp = (props) => {
  return (
    <>
    <h1>Hellow I am props</h1>
    <div>{props.student.name}</div>
    <div>{props.student.Age}</div>
    </>
  )
}




export default PropsCmp