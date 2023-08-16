import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#040b13]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600 text-2xl'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Anil Maharjan</h1>
        <h1 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6]'>I'm a Self-taught Developer </h1> 
        <p className='text-[#ccd6f6] py-4 max-w-[700px]'>
          As a self-taught developer, 
          I am passionate about web technologies and aim to build responsive, efficient, and impactful applications. 
          I'm on a journey of mastering full-stack development, always eager to learn,
           and excited about the endless possibilities in the tech world.
        </p>
        
        <div className=''>
          {/* this need to be done and aswell as need to add 3 projects  */}
          <button to="work" className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-800 hover:border-gray-800'>
            View Work 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 '/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
