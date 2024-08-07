import React from 'react'
import WorkImg from '../assets/dashboard.png'
import CovidImg from '../assets/covid-stats.jpg'
import Estate from '../assets/estate.png'

const Work = () => {
  return (
    <div id='work' className='w-full md:h-screen text-gray-300 bg-[#091425]'>
      {/* Main container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full'>
        {/* Header */}
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>
            Work
          </p>
          <p className='py-6'>Check out some of my projects</p>
        </div>

        {/* Projects Grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project 1 */}
          <div
            style={{ backgroundImage: `url(${Estate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <h1 className='text-2xl font-bold m-2 text-center  border-b-2 text-gray-300 border-red-600'>
                MERN-Estate
              </h1>
              <p className='m-2 text-white tracking-wider'>
                a full-stack web application for managing real estate
                data.Tailwind css and leverage Insomnia for testing API
                endpoints.
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='https://mern-estate-o42x.onrender.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a
                  href='https://github.com/Aneal07/MERN-Estate-Project'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${CovidImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <h1 className='text-2xl font-bold m-2 text-center  border-b-2 text-gray-300 border-red-600'>
                Covid-Stats
              </h1>
              <p className='m-2  text-white tracking-wider'>
                Covid-Stats Covid-Stats is a simple web application that
                provides statistics and data visualization for COVID-19 cases
                worldwide.
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='https://aneal07.github.io/Covid-Stats/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a
                  href='https://github.com/Aneal07/Covid-Stats'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <h1 className='text-2xl font-bold m-2 text-center  border-b-2 text-gray-300 border-red-600'>
                Blog-Dashboard-MERN
              </h1>
              <p className='m-2 text-white tracking-wider'>
                The "Blog with Dashboard" project is a full-stack web
                application built using the MERN stack (MongoDB, Express.js,
                React, Node.js).
              </p>
              <div className='pt-8 text-center'>
                <a
                  href='https://blog-with-dashboard-mern.onrender.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Live
                  </button>
                </a>
                <a
                  href='https://github.com/Aneal07/Blog-with-Dashboard-MERN'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
