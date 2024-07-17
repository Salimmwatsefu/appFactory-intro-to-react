import { useState } from 'react' 
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Home/Hero'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'


function App() {

  return (
    <>
      <div className=' bg-gray-100'>

       <Navbar />

       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
       </Routes>


      </div>
     
    </>

   
  )
}

export default App
