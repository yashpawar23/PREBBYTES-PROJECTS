import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Cart from './Cart'
import Layout from './Layout'

const Routing = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/home' element={<Dashboard/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default Routing