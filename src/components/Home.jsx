import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#09182a]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600 text-2xl'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Anil Maharjan
        </h1>
        <h1 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6]'>
          I'm a Self-taught Developer{' '}
        </h1>
        <p className='text-[#ccd6f6] py-4 max-w-[700px]'>
          I am a Passionate Self-Taught Developer driven by a deep passion for
          software development, I have honed my skills through self-teaching and
          practical experience. Completing the NCFE Level 3 Certificate in
          Coding Practices has enhanced my expertise in full-stack development.
          I am committed to continuous learning and excited to bring innovative
          solutions to the tech industry.
        </p>

        <div className=''>
          {/* this need to be done and aswell as need to add 3 projects  */}
          <a
            href='#work'
            className='text-white group border-2 px-6 py-3 my-2 items-center justify-center hover:bg-gray-800 hover:border-gray-800 inline-flex'
          >
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
