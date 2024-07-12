import React from 'react'

function Hero() {
  return (
    <div className=' h-[100vh]'>

        <div className=' text-center mt-44'>
            <h1 className=' text-5xl uppercase font-extrabold tracking-widest'>
                Hey, I'm Salim Mwatsefu
            </h1>
            <p className=' text-xl mt-10 '>A Result-Oriented Web Developer building and managing Websites and Web <br/> Applications that leads to the success of the overall product</p>
        </div>
        <div className=' flex justify-center mt-14'>
            <button className=' bg-violet-600 py-5 px-20 rounded-md'>
                <span className=' text-white text-xl font-bold'>PROJECTS</span>
            </button>
        </div>
    </div>

    
  )
}

export default Hero