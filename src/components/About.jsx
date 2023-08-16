import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#091425] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Anil, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I began my coding journey with freeCodeCamp. 
                 Through this platform, 
                I've been able to consistently expand my web development skills and knowledge. 
             I've gained my skills through self-directed learning and personal projects.
             <br></br>
            When I'm not coding, you can find me exploring the outdoors and going on hikes. 
            If you have any questions or just want to chat, feel free to reach out to me!</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About