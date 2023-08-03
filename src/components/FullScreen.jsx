import React from 'react'
import {BsArrowsAngleExpand, BsArrowsAngleContract}  from 'react-icons/bs'


function openFullscreen() {
  //const elem = document.querySelector('#bracketsFull')
  const elem = document.body
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  const elem = document.querySelector('#bracketsFull')
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

export default function FullScreen({fullScreen, setFullScreen}) {
  
  const resize = () => {
    if(!fullScreen){
      openFullscreen()
    } else {
      closeFullscreen()
    }
    setFullScreen(!fullScreen)
  }

  return (
    <button title='Toggle fullscreen'
      className='flex items-center justify-center self-end p-4 font-medium hover:scale-105 duration-300'
      onClick={() => resize()}
    >
    {fullScreen ?
      <BsArrowsAngleContract
        size={25}
        color='#000000'
        className='cursor-pointer self-center flex-shrink-0'
      /> 
      :
      <BsArrowsAngleExpand
        size={25}
        color='#000000'
        className='cursor-pointer self-center flex-shrink-0'
      />
    }
  </button>
  )
}
