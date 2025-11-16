import { useState } from 'react'
import './App.css'
import './assets/css/app.min.css'
import './assets/icons/font-icon.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Whishlist from './pages/whishlist'
import Productdetails from './pages/productdetails'
import Cart from './pages/cart'
import { Toaster } from 'react-hot-toast'
function App() {


  return (
    <>
     <Toaster position="top-right" />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/productdetails' element={<Productdetails/>}></Route>
        <Route path='/wishlist' element={<Whishlist/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </>
  )
}

export default App
