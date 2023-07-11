import React from 'react'

export default function StageLines({numOfBrackets}) {
  
  const lineColor = 'border-slate-100'
  const lineHeight = 100 / numOfBrackets + '%'
  //console.log(lineVertical)

  return (
    <div className='flex h-full w-32'>
        <div className='flex flex-col justify-around w-16 h-full'>
          {
            Array(numOfBrackets).fill(null).map((v, i) => (
              <div key={i} className={`solid border-b-4 rounded-2xl ${lineColor}`}></div>
            ))
          }
        </div>
        <div className='flex flex-col justify-around h-full'>
        {
          Array(numOfBrackets / 2).fill(null).map((v, i) => (
            <div key={i} className={`solid border-l-4  rounded-2xl ${lineColor}`} style={{height: lineHeight}}></div>
          ))
        }
        </div>
        <div className='flex flex-col justify-around w-16 h-full'>
        {
          Array(numOfBrackets / 2).fill(null).map((v, i) => (
            <div key={i} className={`solid border-b-4 rounded-2xl ${lineColor}`}></div>
          ))
        }              
        </div>
    </div>
  )
}
