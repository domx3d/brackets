import React, {useState, useContext} from 'react'
import reactLogo from '../assets/brackets_logo.png'
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
    <div className='bg-slate-800 sticky left-0 z-20'>
      <div className='flex justify-between items-center h-24 w-screen md:max-w-[1240px] text-white px-4 mx-auto'>
        <div className='flex items-center'>
          <img src={reactLogo} className="mr-2 w-12 h-12 rounded-full" alt="React logo" />
          <h1 className='text-xl font-bold uppercase'>Brackets</h1>
        </div>
        <ul className='hidden md:flex gap-8 items-center'> 
          <li className='cursor-pointer '>
            <Link to='/' className='p-4'>Home</Link>
          </li>
          <li className='cursor-pointer'>
            <Link to='/tournament' className='p-4'>Tournament</Link>
          </li>
          <li className='cursor-pointer'>
            <Link to='about' className='p-4'>About</Link>
          </li>
          <li>
            <FullScreen fullScreen={fullScreen} setFullScreen={setFullScreen}/>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? 
          <AiOutlineClose size={20} /> :
          <AiOutlineMenu size={20} />
        }
        </div>
        <div className={
          nav ? 
          'fixed md:hidden right-0 top-24 w-[60%] border-r h-full border-r-gray-100 bg-[#000300] z-10 ease-in-out duration-500' 
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
            <li>
             <FullScreen fullScreen={fullScreen} setFullScreen={setFullScreen}/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}