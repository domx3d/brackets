import React, {useState, useContext} from 'react'
import reactLogo from '/bracket_logo.svg'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import FullScreen from './fullScreen'



export default function Navbar() {

  const [nav, setNav] = useState(false)
  const [fullScreen, setFullScreen] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }



  return (
    <div className='sticky left-0 z-20'>
      <div className='flex justify-between items-center h-24 w-screen md:max-w-[1240px] text-black font-bold px-4 mx-auto'>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? 
          <AiOutlineClose size={20} /> :
          <AiOutlineMenu size={20} />
        }
        </div>
        <div className='flex items-center md:mr-auto self-center'>
          <img src={reactLogo} className="mr-2 w-12 h-12 rounded-full " alt="React logo" />
          <h1 className='brand-name text-xl font-bold uppercase'>Brackets</h1>
        </div>
        <ul className='hidden md:flex gap-8 items-center'> 
          <li className='cursor-pointer '>
            <Link to='/' className='p-4'>Home</Link>
          </li>
          <li className='cursor-pointer'>
            <Link to='/tournament' className='p-4'>Tournament</Link>
          </li>
          <li className='cursor-pointer'>
            <Link to='/about' className='p-4'>About</Link>
          </li>
          
        </ul>
        <div className='rounded-2xl lg:ml-20 md:ml-10 '> 
          <FullScreen fullScreen={fullScreen} setFullScreen={setFullScreen}/>
        </div>
        
        <div className={
            nav ? 
            'fixed md:hidden left-0 top-24 w-[60%] border-r h-full border-r-gray-100 bg-[#000300] text-white z-10 ease-in-out duration-500' 
            : 'fixed left-[-100%]'
          }>
            <ul className='p-4 uppercase'>
              <li className='p-4 border-b border-gray-600 flex'
                onClick={handleNav}>
                <Link to='/' className='w-full'>Home</Link>
              </li>
              <li className='p-4 border-b border-gray-600 flex'
                onClick={handleNav}>
                <Link to='/tournament' className='w-full'>Tournament</Link>
              </li>
              <li className='p-4 border-b border-gray-600 flex'
                onClick={handleNav}>
                <Link to='/about' className='w-full'>About</Link>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}