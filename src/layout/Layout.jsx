import React from 'react'
import { Navbar } from '../components'
import { Route, Routes } from 'react-router-dom'
import { Cart, Home, Models, New, Popular, Shop } from '../pages'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <main>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/models' element={<Models/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/new' element={<New/>} />
      <Route path='/popular' element={<Popular/>} />
      <Route path='/cart' element={<Cart/>} />

    </Routes>
    </main>
    
    </>
  )
}

export default Layout
