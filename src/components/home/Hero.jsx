import React from 'react'
import { Link } from 'react-router-dom'
import trophy from '/trophy.svg'
import 'react-toastify/dist/ReactToastify.css';
import SvgComponent from './HeroSvgs';
import { motion } from 'framer-motion';
import HowToUse from './HowToUse';

export default function Hero() {


  return (
    <>
      <div className='flex flex-col md:flex-row justify-start items-center h-[50%] gap-20 w-screen md:max-w-[1240px] text-black font-semibold px-4 mx-auto mt-16 md:mt-32'>
        <motion.div className='flex flex-col w-[100%] md:w-[50%]  gap-16 md:gap-16 text-lg md:text-xl lg:text-2xl'
          style={{transformOrigin: 'left'}}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.3, ease: 'linear'}}
          >
          <h1 className='font-bold text-slate-800'>Welcome to Brackets: Your Tournament Headquarters!</h1>
          <p className='text-slate-700'>Ready to elevate your competitions? Look no further. With Brackets, creating, managing, and celebrating tournaments has never been easier.</p>
        </motion.div>
        <motion.div className='w-[50%] flex justify-center items-center'
          style={{transformOrigin: 'right'}}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.3, ease:'linear' }}
          >
          <Link to='/tournament' className=''>
            <button className='bg-amber-300 w-[200px] sm:w-[250px] rounded-md font-medium text-xl mx-auto py-3 text-black hover:scale-105 duration-300 drop-shadow-xl' >
              <p className='text-lg md:text-xl lg:text-2xl'>Get Started</p>
            </button>
          </Link>
        </motion.div>

      </div>
      
      <div className='flex justify-center items-center relative w-full h-full' id="podium-div">
{/*         <p className='absolute top-[70px] left-[24%] md:left-[29%] translate-x-[-50%] max-w-[16%] '>Manage your competiton</p>
        <p className='absolute top-[40px] left-[47%] translate-x-[-50%] max-w-[16%] text-slate-500'> Unlock a digital trophy</p>
        <p className='absolute top-[80px] left-[68%] md:left-[65%] translate-x-[-50%] max-w-[16%]'>Create up to 32 teams</p> 
      <img src="podium.svg" alt="podium" className=' w-[90%] md:w-[60%] h-[10%] md:h-[0%]' /> */}
        <SvgComponent className=' w-[90%] md:w-[60%] lg:w-[40%] h-[10%] md:h-[0%]'/>
      </div>
      <div className='bg-[#d9d9d9] translate-y-[-8px] flex justify-center items-start w-screen h-fit'>
        <HowToUse />
      </div>
      <div className='w-full h-32 translate-y-[-8px] bg-gradient-to-b from-[#d9d9d9] to-white'>
        <div className='flex justify-center items-center p-4'>
          <img src="arrow.svg" alt="up arrow" className='h-16' id="arrow" onClick={()=> {window.scroll({top: 0, left: 0, behavior: 'smooth' })}}/>
        </div>
      </div>
    </>
  )
}

