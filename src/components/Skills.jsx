import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Tailwind from '../assets/tailwind.png'
import Sass from '../assets/sass.png'
import Github from '../assets/github.png'
import JavaScript from '../assets/javascript.png'
import eact from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-red-600 '>
            Tech-Stack
          </p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Html} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Css} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src={JavaScript}
              alt='JAVASCRIPT icon'
            />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={eact} alt='REACT icon' />
            <p className='my-4'>REACT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='TAILWIND icon' />
            <p className='my-4'>TAILWIND</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg'
              alt='BOOTSTRAP icon'
            />
            <p className='my-4'>BOOTSTRAP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Sass} alt='SASS icon' />
            <p className='my-4'>SASS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materializecss/materializecss-original.svg'
              alt='SASS icon'
            />
            <p className='my-4'>MATERIALIZECSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt='GITHUB icon' />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
              alt='GIT icon'
            />
            <p className='my-4'>GIT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg'
              alt='NODE icon'
            />
            <p className='my-4'>NODE.JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
              alt='EXPRESS icon'
            />
            <p className='my-4'>EXPRESS.JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg'
              alt='MONGO icon'
            />
            <p className='my-4'>MONGO.DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg'
              alt='POSTMAN icon'
            />
            <p className='my-4'>POSTMAN</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg'
              alt='POSTMAN icon'
            />
            <p className='my-4'>INSOMNIA</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg'
              alt='CANVA icon'
            />
            <p className='my-4'>CANVA</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto'
              src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg'
              alt='POSTMAN icon'
            />
            <p className='my-4'>VISUAL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
