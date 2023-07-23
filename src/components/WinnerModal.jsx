import React, {useState} from 'react'
import { BsX } from 'react-icons/bs'
import Trophy from './Trophy'

export default function WinnerModal({winner, winningPlayers, handleClose}) {
  
  const [showTrophy, setShowTrophy] = useState(false)

  const showModal = winner ? true : false
  const bgClickClose = (e) => {
    if( e.target.id === 'wrapper') handleClose()
  }
 
  return (
    <div id='wrapper'
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      onClick={bgClickClose}
    >
      <div className=' w-[90%] md:w-[60%] h-[60%] md:h-[60%] flex flex-col justify-center items-center sticky top-24'>
      <button className='text-white text-xl place-self-end'
        onClick={handleClose}>
          <BsX size={40} />
        </button>
      {!showTrophy && 
        <div className='bg-white p-4 rounded h-[90%] md:h-[600px] w-[95%] md:w-[800px] flex flex-col justify-center items-center gap-4'>
          <h3 className='text-lg mb-4 '>And the <span className='text-amber-300'>WINNERS</span> are:</h3>
          <h4 className='font-bold mb-2 text-2xl'>{winner}</h4>
          <div className='w-full h-full flex flex-col flex-wrap items-center justify-start overflow-hidden'>
            {winningPlayers ?
              winningPlayers.map((player) => (
                <h5 key={player.id} className='text-md text-gray-600'>{player.name}</h5>
              ))
              :
              ''
            }
          </div>
          <button 
            onClick={()=> setShowTrophy(true)}
            className='bg-amber-300 w-[200px] rounded-md font-medium mt-4 mb-2 mx-auto py-3 text-black hover:scale-105 duration-300'
            > Claim your trophy</button>
        </div>
      }
      {showTrophy &&
        <Trophy />
      }
      </div>
      
    </ div>
  )
}
