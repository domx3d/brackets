import React from 'react'
import {
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

export default function About() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid gap-8 text-gray-500'>
      <div>
        <h1 className='w-full text-3xl font-bold text-amber-300 mb-12'>About</h1>
        <div className='flex flex-col md:flex-row gap-8'>

        
          <div className='sm:w-[50%] flex flex-col gap-3'>
            <p>
            ✧ I got the idea to create brackets from my friends while they were playing beer pong at a party.
            </p>
            <p>
            ✧ It is meant to be a utility application everyone can use, on every device.
            </p>
            <p>
            ✧ So I made it as responsive as possible and to give it some life I also put in an immersive celebration at the finish.
            </p>
            <p>
            ✧ The app was made with React, Tailwind, React Three Fiber, Framer Motion, etc. 
              Blender was used for modelling and inkscape for illustrations.
            </p>
          </div>
        
        
          <img src='trophy.svg' alt='trophy' className='w-48 sm:ml-32 self-center mt-8 mb-12'/>
        </div>
        <h2 className='text-xl font-bold mt-8 mb-4 text-amber-200'>What I could add...</h2>
        <div className='flex flex-col gap-3 ml-4'>
          <p>#️⃣ Keep track of scores</p>
          <p>📤 Exporting</p>
          <p>📎 Sharing</p>
        </div>
        <div className='flex justify-evenly md:justify-start gap-16 md:w-[75%] mt-20'>
          <FaGithubSquare size={30}/>
          <FaInstagram size={30}/>
          <FaTwitterSquare size={30}/>
        </div>
      </div>
    </div>
  )
}
