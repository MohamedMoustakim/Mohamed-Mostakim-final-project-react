import { useState } from 'react'
import './App.css'
import Footer from './componets/Footer'
import Navbar from './componets/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pegas/Home'
import Shop from './pegas/Shop'
import Sale from './pegas/Sale'
import  Features  from './pegas/Features'
import Blog from './pegas/Blog'
import About from './pegas/About'
import Contact from './pegas/Contact'
import Sinap from './pegas/Sinap'
import Login from './pegas/Login'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Sale' element={<Sale />} />
        <Route path='/Features' element={<Features />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='/Sinap' element={<Sinap />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
