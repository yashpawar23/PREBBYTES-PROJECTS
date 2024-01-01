import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBarpanel from './NavBarpanel'

const Rootlayout = () => {
  return (
    <>
    <h1>Navigation</h1>
    <NavBarpanel/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default Rootlayout