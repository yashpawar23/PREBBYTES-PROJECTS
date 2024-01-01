import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <h3>Contact</h3>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>

    </div>
  )
}

export default Contact