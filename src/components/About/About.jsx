import React from 'react'
import { Link } from 'react-router-dom'

function About() {

  const skills = [
  'HTML', 'JAVASCRIPT', 'PYTHON', 'C++', 'RUBY', 'DJANGO', 'FLASK', 'REACT', 'ANGULAR'

]
  return (
    <div>
      <div>
        <h1 className='uppercase text-4xl font-bold mt-20 text-center'>About me</h1>

        <span className=' border border-b-4 rounded-md border-violet-800 flex justify-center w-[32px] mt-10 ml-[50%]'></span>

        <div className=' flex justify-center'>
        <p className=' text-center mt-10 text-xl w-[65%] '>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>

        </div>

       
      </div>

      <div className=' flex mx-10 mt-28 gap-20 '>
        <div className='  w-1/2'>
          <h2 className=' text-2xl font-bold'>Get to know me!</h2>

        </div>

        <div className='  w-1/2 '>
          <h2 className=' text-2xl font-bold'>My Skills</h2>

          

          <div className=' mt-10  flex flex-wrap gap-5'>
          {skills.map((skill, index) => (
           
            <button className=' bg-stone-200 py-3 px-5 pointer-events-none rounded-md text-gray-600 font-bold text-sm' >{skill}</button>
          ))}
          </div>
         

        </div>
      </div>
    </div>
  )
}

export default About