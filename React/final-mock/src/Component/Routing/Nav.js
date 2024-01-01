import React from 'react'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'

const Nav = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Nav