import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {


  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-amber-300 font-bold p-2'>
          
          Win your trophy
        </p>
        <h1 className='homeTitle md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Create brackets
        </h1>
        <p className='md:text-2xl text-xl font-bold p-4 text-gray-500'>
          With up to 32 teams.
        </p>
        <Link to='tournament' className='my-6'>
          <button className='bg-amber-300 w-[200px] rounded-md font-medium  mx-auto py-3 text-black hover:scale-105 duration-300'>
            Get Started
          </button></Link>
      </div>

    </div>
  )
}
