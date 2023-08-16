import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFreeCodeCamp}   from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo-5.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0d1f39] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'80px'}}/>
        </div>

        {/* menu */}
        
        <ul className=' hidden md:flex'>
                <li>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>
                Home
        </Link>
                </li>
                <li > 
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                About
        </Link>
        </li>
                <li >
           <Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500}>
                 Skills
        </Link>
                </li>
                <li>
            <Link activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500}>
                Work
        </Link>
                </li>
                <li>
             <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
                Contact
        </Link>
                </li>
            </ul>
        

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/* mobile menu */}
       <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#0b1c2e] flex flex-col justify-center items-center cursor-pointer' }>
               <li  className='py-6 text-4xl'>
            <Link onClick={handleClick} activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >
                Home
        </Link>
                </li>
                <li className='py-6 text-4xl'> 
            <Link  onClick={handleClick} activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
                About
        </Link>
        </li>
                <li className='py-6 text-4xl'>
           <Link onClick={handleClick} activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} >
                 Skills
        </Link>
                </li>
                <li className='py-6 text-4xl'>
            <Link onClick={handleClick} activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500} >
                Work
        </Link>
                </li>
                <li className='py-6 text-4xl'>
             <Link onClick={handleClick} activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
                Contact
        </Link>
                </li>
       </ul>

        {/* Social icons*/}
        <div className='hidden lg:flex flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://www.linkedin.com/in/anil-maharjan070707/" target='_blank' rel="noopener noreferrer">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://github.com/Aneal07" target='_blank'  rel="noopener noreferrer">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="https://www.freecodecamp.org/mighty07" target='_blank'rel="noopener noreferrer">
                        CodeCamp <FaFreeCodeCamp size={30}/>
                    </a>
                </li>
                <li className='w-[155px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                    <a className='flex justify-between items-center w-full text-gray-300' 
                    href="AM -CV.pdf" target='_blank' rel="noopener noreferrer" >
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;