import React from 'react';
import WorkImg from '../assets/work.jpg';
import CovidImg from '../assets/covid-stats.jpg';
import FilmImg from '../assets/flimfusion.jpg';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#091425]'>
      
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
            style={{backgroundImage: `url(${FilmImg})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <h1 className='text-2xl font-bold m-2 text-center  border-b-2 text-gray-300 border-red-600'>Flimfusion</h1>
              <p className='m-2 text-white tracking-wider'>
                Flimfusion is your dedicated movie search assistant.
                Flimfusion specializes in helping users quickly and effectively find movies.
                </p>
              <div className='pt-8 text-center'>
                <a href="https://aneal07.github.io/Flimfusion/" target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                <a href="https://github.com/Aneal07/Flimfusion" target='_blank' rel="noopener noreferrer">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div 
            style={{backgroundImage: `url(${CovidImg})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <h1 className='text-2xl font-bold m-2 text-center  border-b-2 text-gray-300 border-red-600'>Covid-Stats</h1>
              <p className='m-2  text-white tracking-wider'>
                Covid-Stats Covid-Stats is a simple web application that provides statistics and data visualization for COVID-19 cases worldwide.
                </p>
              <div className='pt-8 text-center'>
                <a href="https://aneal07.github.io/Covid-Stats/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                <a href="https://github.com/Aneal07/Covid-Stats" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div 
            style={{backgroundImage: `url(${WorkImg})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100'>
              <h1 className='text-2xl font-bold m-2 text-center  border-b-2 text-gray-300 border-red-600'>Bitebound</h1>
              <p className='m-2 text-white tracking-wider'>
                Bitebound is a web application build in react and designed for food that allows you to search by menu and price.
                </p>
              <div className='pt-8 text-center'>
                <a href="https://aneal07.github.io/Restaurent-Website/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
                <a href="https://github.com/Aneal07/Restaurent-Website" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;
