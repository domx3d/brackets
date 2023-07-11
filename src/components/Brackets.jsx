import React, { useState, useEffect, useContext } from 'react'
import Stage from './Stage';
import { TournamentContext } from './Tournament';
import StageLines from './StageLines';

const getMaxBrackets = (numOfTeams) => {
  let max = 1;
  while (max < numOfTeams) {
      max *= 2;
  }
  return max / 2;
}

/* const allBrackets = [
  [
    { id:1, name:'game1'}, {id:2, name: ' game2'}, {id:3, name: 'game3'}, {id:4, name: 'game4'}, 
  ],
  [
    {id:5, name: 'game5'}, {id:6, name: 'game6'},
  ],
  [
    {id:7, name: 'game7'}
  ]
] */


export default function Brackets() {
  
  const [teams, setTeams, allBrackets, setAllBrackets] = useContext(TournamentContext)

  useEffect(() => {
    window.localStorage.setItem('brackets', JSON.stringify(allBrackets));
  }, [allBrackets])
 
  useEffect(() => {
    if(allBrackets.length === 0) {
      console.log('creating brackets')
      createBrackets(setAllBrackets, teams.length)
    }
    else console.log('brackets already created.')
  }, [])

  const fillOrderedBrackets = () => {
    const firstStage = [...allBrackets[0]]
    firstStage.forEach((bracket, index )=> {
      if(index*2 < teams.length-1 ) {
        bracket.team1 = teams[index*2].id
        bracket.team2 = teams[index*2 +1].id
      } else if (index*2 === teams.length-1){
        bracket.team1 = teams[index*2].id
      }
      
    });
    setAllBrackets([firstStage,...allBrackets.slice(1)])
  }

  const fillRandomBrackets = () => {
    const firstStage = [...allBrackets[0]]
    const randomTeams = [...teams].sort((a, b) => 0.5 - Math.random());
    firstStage.forEach((bracket, index )=> {
      if(index*2 < randomTeams.length-1 ) {
        bracket.team1 = randomTeams[index*2].id
        bracket.team2 = randomTeams[index*2 +1].id
      } else if (index*2 === randomTeams.length-1){
        bracket.team1 = randomTeams[index*2].id
      }
      
    });
    setAllBrackets([firstStage,...allBrackets.slice(1)])
  }

  const createBrackets = () => {
    let maxBrackets = getMaxBrackets(teams.length)
    const newBrackets = []
    let gi = 1
    while(maxBrackets >= 1) {
      const currentBrackets = []
      for(let i = 0; i < maxBrackets; i++) {
        currentBrackets.push({id: 'bracket'+gi, name: 'game'+gi})
        gi++
      }
      newBrackets.push(currentBrackets)
      maxBrackets /= 2
    }
    setAllBrackets(newBrackets)
  }

  return (
    <div className="flex flex-col md:items-center w-fit md:w-full">
      <div className='flex mb-16 gap-4 w-[100vw] flex-wrap justify-center sticky left-0'>
        <button
          className='flex items-center justify-center p-4 rounded-md border-2 border-amber-300 font-medium text-black hover:scale-105 duration-300 self-start'
          onClick={() => createBrackets()}
        >
          Create Brackets
        </button>
        <div className='flex gap-4'>
          <button
            className='flex items-center justify-center p-4 rounded-md border-2 font-medium text-black hover:scale-105 duration-300'
            onClick={() => fillOrderedBrackets()}
          >
            Fill Ordered
          </button>
          <button
            className='flex items-center justify-center p-4 rounded-md border-2 font-medium text-black hover:scale-105 duration-300'
            onClick={() => fillRandomBrackets()}
          >
            Fill Random
          </button>
        </div>
      </div>
      <div className='flex flex-col w-fit h-fit'>
        <div className='flex flex-row px-16 gap-0 '>
          {allBrackets.map((brackets, i) => (
            <div key={i} className='flex'>
              <div className='mx-4'>
                <Stage stage={i}/>
                    
              </div>
              {i !== allBrackets.length-1 && 
                <StageLines numOfBrackets={allBrackets[i].length}/>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
