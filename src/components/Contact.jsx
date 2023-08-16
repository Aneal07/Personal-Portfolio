import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
       <form method='POST' action="" className='flex flex-col max-w-[600px] w-full h-full'>
        <div className='pb-10 '> 
            <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300 '>Contact</p>
            <p className='text-gray-300 py-4'>Shoot me an email</p>
        </div>
        <input className='p-2' type="text" name="name" placeholder='Name'/>
        <input  className='my-4 p-2 ' type="email" name="email" placeholder='Email'/>
        <textarea  className='p-2' rows="10" cols="" name="message"></textarea>
        <button className='text-white border-2 hover:bg-gray-800 hover:border-gray-800 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
       </form>
       </div>
  )
}

export default Contact