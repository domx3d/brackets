import React from 'react'
import { Link } from 'react-router-dom'
import trophy from '/trophy.svg'
import 'react-toastify/dist/ReactToastify.css';
import SvgComponent from './HeroSvgs';

export default function Hero() {


  return (
    <>
      <div className='flex flex-col md:flex-row justify-start items-center md:h-[50%] gap-12 w-screen md:max-w-[1240px] text-black font-semibold px-4 mx-auto mt-16 md:mt-32'>
        <div className='flex flex-col w-[100%] md:w-[50%]  gap-10 md:gap-16 text-lg md:text-xl lg:text-2xl'>
          <h1 className='font-bold text-slate-800'>Welcome to Brackets: Your Tournament Headquarters!</h1>
          <p className='text-slate-700'>Ready to elevate your competitions? Look no further. With Brackets, creating, managing, and celebrating tournaments has never been easier.</p>
        </div>
        <div className='w-[50%] flex justify-center items-center'>
          <Link to='/tournament' className=''>
            <button className='bg-amber-300 w-[200px] sm:w-[250px] rounded-md font-medium text-xl mx-auto py-3 text-black hover:scale-105 duration-300 drop-shadow-xl'>
              <p className='text-lg md:text-xl lg:text-2xl'>Get Started</p>
            </button>
          </Link>
        </div>

      </div>
      <div className='flex justify-center items-center relative w-full h-full mt-16 md:mt-24 lg:mt-36'>
{/*         <p className='absolute top-[70px] left-[24%] md:left-[29%] translate-x-[-50%] max-w-[16%] '>Manage your competiton</p>
        <p className='absolute top-[40px] left-[47%] translate-x-[-50%] max-w-[16%] text-slate-500'> Unlock a digital trophy</p>
        <p className='absolute top-[80px] left-[68%] md:left-[65%] translate-x-[-50%] max-w-[16%]'>Create up to 32 teams</p> 
        <img src="podium.svg" alt="podium" className=' w-[90%] md:w-[60%] h-[10%] md:h-[0%]' /> */}
        <SvgComponent className=' w-[90%] md:w-[60%] lg:w-[40%] h-[10%] md:h-[0%]'/>
      </div>
      <div className='h-screen bg-[#d9d9d9] translate-y-[-8px]'>
      </div>
    </>
  )
}

{/* <div className='text-white'>
<div className=' home2 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>
  <h1 className='homeTitle md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
    Create brackets
  </h1>
  <p className='homeTitle2 md:text-2xl text-xl font-bold p-4 text-gray-500'>
    With up to 32 teams.
  </p>
  
  <img src={trophy} alt='trophy' className='w-24 sm:w-40 my-4 sm:my-8'/>
  <p className='text-amber-300 font-bold text-xl p-2 homeTitle3'>
    
    And win your trophy
  </p>
  <Link to='/tournament' className='my-10 sm:my-20'>
    <button className='bg-amber-300 w-[200px] sm:w-[250px] rounded-md font-medium text-xl mx-auto py-3 text-black hover:scale-105 duration-300'>
      Get Started
    </button></Link>
</div>
<div className='flex justify-center items-center'>
  <img src="podium.svg" alt="podium" className=' w-[90%] md:w-[60%] h-[10%] md:h-[0%]' />
</div>
<div className='h-screen bg-[#d9d9d9] '>

</div>
</div> */}