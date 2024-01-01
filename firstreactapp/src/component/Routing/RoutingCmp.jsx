import React from 'react'
import { Link } from 'react-router-dom'

const RoutingCmp = () => {
  return (
    <div>

       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
    </div>
  )
}

export default RoutingCmp