import React from 'react'
import { BsX } from 'react-icons/bs'

export default function WinnerModal({winner, handleClose}) {
  
  const showModal = winner ? true : false
  const bgClickClose = (e) => {
    if( e.target.id === 'wrapper') handleClose()
  }

  const showTrophy = () => {
    console.log('show trophy')
  }

  return (
    <div id='wrapper'
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      onClick={bgClickClose}
    >
      <div className=' w-[90%] md:w-[600px] h-[300px] flex flex-col'>
        <button className='text-white text-xl place-self-end'
        onClick={handleClose}>
          <BsX size={40} />
        </button>
        <div className='bg-white p-2 rounded h-[300px] flex flex-col justify-center items-center gap-4'>
          <h3 className='text-lg '>And the <span className='text-amber-300'>WINNERS</span> are:</h3>
          <h4 className='font-bold mb-4 text-xl'>{winner}</h4>
          <button 
          onClick={showTrophy}
            className='bg-amber-300 w-[200px] rounded-md font-medium  mx-auto py-3 text-black hover:scale-105 duration-300'
            > Claim your trophy</button>
        </div>
      </div>
    </ div>
  )
}
