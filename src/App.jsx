import { useState } from 'react' 
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Home/Hero'


function App() {

  return (
    <>
      <div className=' bg-gray-200'>

       <Navbar />

       <div>
        <Hero />
       </div>


      </div>
     
    </>

   
  )
}

export default App
