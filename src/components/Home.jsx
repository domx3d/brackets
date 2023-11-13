import React from 'react'
import { Link } from 'react-router-dom'
import trophy from '/trophy.svg'
import 'react-toastify/dist/ReactToastify.css';

export default function Hero() {


  return (
    <div className='text-white home'>
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

    </div>
  )
}
