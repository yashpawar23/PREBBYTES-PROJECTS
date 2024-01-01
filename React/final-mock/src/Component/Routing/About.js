import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
         <h3>About</h3>
        <Link to="/contact">Contact</Link><br></br>
        <Link to="/">Home</Link>

    </div>
  )
}

export default About