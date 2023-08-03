import React, { useState, useEffect, useContext } from 'react'
import Stage from './Stage';
import { TournamentContext } from './Tournament';
import StageLines from './StageLines';
import { ToastContainer, toast } from 'react-toastify';

const getMaxBrackets = (numOfTeams) => {
  let max = 1;
  while (max < numOfTeams) {
      max *= 2;
  }
  return max / 2;
}


export default function Brackets() {
  
  const [teams, setTeams, allBrackets, setAllBrackets] = useContext(TournamentContext)
  
  useEffect(() => {
    window.localStorage.setItem('brackets', JSON.stringify(allBrackets));
  }, [allBrackets])
 
  useEffect(() => {
    if(allBrackets.length === 0 && teams.length > 1) { 
      createBrackets()
    }
  }, [])

  const emptyFirstStage = () => (allBrackets[0].map(({ id, name}) => ({ id, name })))

  const fillOrderedBrackets = () => {
    const firstStage = emptyFirstStage()
    const numOfTeam2 = teams.length - firstStage.length
    
    let teamIndex = 0, stageindex = 0
    while(teamIndex < teams.length) {
      firstStage[stageindex].team1 = teams[teamIndex++].id
      if(stageindex < numOfTeam2) 
        firstStage[stageindex].team2 = teams[teamIndex++].id
      stageindex++
    }
    setAllBrackets([firstStage,...allBrackets.slice(1)])
  }

  const fillRandomBrackets = () => {
    const firstStage = emptyFirstStage()
    const randomTeams = [...teams].sort((a, b) => 0.5 - Math.random());
    const numOfTeam2 = teams.length - firstStage.length
    
    let teamIndex = 0, stageindex = 0
    while(teamIndex < randomTeams.length) {
      firstStage[stageindex].team1 = randomTeams[teamIndex++].id
      if(stageindex < numOfTeam2) 
        firstStage[stageindex].team2 = randomTeams[teamIndex++].id
      stageindex++
    }
    setAllBrackets([firstStage,...allBrackets.slice(1)])
  }

  const createBrackets = () => {
    if(teams.length <= 1) {
      toast.warn('You need at least 2 teams to create brackets!')
      return
    }
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

    toast('😀 Brackets created!')
  }



  const handleChange = (event) => {
    const selectedOption = event.target.value ? Number(event.target.value) : ''
  //const selectedOption = Number(event.target.value)
    
    const bracketId = event.target.parentNode.dataset.bracket
    const team = event.target.parentNode.dataset.team

    const updateStage0 = allBrackets[0].map((bracket) => {
      if(bracket.id === bracketId) {
        //console.log(Number(selectedOption))
        return {...bracket, [team]: selectedOption}
      }
      return bracket
    })
    setAllBrackets([updateStage0, ...allBrackets.slice(1)])
    
    
  }

  const options = []
  for (let team of teams) {
    options[[team.id]] = team.name
  }
    
  const teamOptions = (topValue) => {
  //options[]
  //console.log("options")
  return (
    <select onChange={handleChange} value={1}>
      <option value={topValue} >{options[topValue]}</option>
      <option value=""></option>
      {Object.entries(options).map(([value,label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )}

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
      <div className='flex flex-col w-fit h-fit' id="bracketsFull">
        <div className='flex flex-row px-16 gap-0 '>
          {allBrackets.map((brackets, i) => (
            <div key={i} className='flex'>
              <div className='mx-4'>
                <Stage stage={i}
                  teamOptions={teamOptions}/>
                    
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
