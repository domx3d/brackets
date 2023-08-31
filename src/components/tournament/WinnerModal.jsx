import React, {useState} from 'react'
import { BsX } from 'react-icons/bs'
import Trophy from '../three/Trophy'

export default function WinnerModal({winner, winningPlayers, handleClose}) {
  
  const [showTrophy, setShowTrophy] = useState(false)

  const showModal = winner ? true : false
  const bgClickClose = (e) => {
    if( e.target.id === 'wrapper' && !showTrophy) handleClose()
  }
  console.log(winningPlayers)
 
  return (
    <div id='wrapper'
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      onPointerDown={bgClickClose}
    >
      {!showTrophy && 
      <div className='flex modalSizeParent flex-col justify-center items-center sticky top-24'>
      <button className='text-white text-xl place-self-end'
        onClick={handleClose}>
          <BsX size={40} />
        </button>
      
        <div className='bg-white modalSizeChild p-4 rounded flex flex-col justify-between items-center gap-4'>
          <h3 className='text-lg my-4 '>And the <span className='text-amber-300'>WINNERS</span> are:</h3>
          <h4 className='font-bold mb-2 hwFont text-4xl'>{winner}</h4>
          <div className='w-fit h-fit flex flex-col hwFont flex-wrap items-center justify-center overflow-hidden'>
            
            {winningPlayers ?
              winningPlayers.map((player) => (
                <h5 key={player.id} className='text-2xl text-gray-600'>{player.name}</h5>
              ))
              :
              ''
            }
            </div> 
          <button 
            onClick={()=> setShowTrophy(true)}
            className='bg-amber-300 w-[200px] rounded-md font-medium mt-4 mb-2 mx-auto py-3 text-black hover:scale-105 duration-300'
            > Claim your trophy
          </button>
        </div>
    
      </div>
      }
      {showTrophy &&
      <div className='fixed inset-0 flex flex-col justify-center items-center'>
        <button className='text-white fixed top-32 right-4 md:right-[25%] z-50'
          onClick={handleClose}>
          <BsX size={40} />
        </button>
        <Trophy />
      </div>
      }  
    </ div>
  )
}
