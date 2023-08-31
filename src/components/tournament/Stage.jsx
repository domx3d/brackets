import React, {useContext, useState} from 'react'
import {BsArrowRightCircleFill, BsTrophy} from 'react-icons/bs'
import { TournamentContext } from './Tournament'
import useLongPress from '../hooks/UselongPress'
import { ToastContainer, toast } from 'react-toastify';

export default function Stage({stage, teamOptions}) {

  const [teams, setTeams, allBrackets, setAllBrackets, setWinner, getTeamName] = useContext(TournamentContext)
  const [holdData, setHoldData] = useState('')    // used for deleting team from bracket after holding

  /* const getTeamName = (teamId) => {
    return teams.find(team => team.id === teamId)?.name ?? ''
  } */

  const advance = (iBracket, teamId) => {
    const nextStage = stage + 1
    if(nextStage >= allBrackets.length) return 

    const nextBracket = Math.floor(iBracket/2)
    const isTeam1 = iBracket % 2 === 0

    const updateStageBrackets = [...allBrackets[nextStage]]
    if(isTeam1) {
      updateStageBrackets[nextBracket].team1 = teamId
    } else {
      updateStageBrackets[nextBracket].team2 = teamId
    }
    setAllBrackets([...allBrackets.slice(0, nextStage), updateStageBrackets, ...allBrackets.slice(nextStage + 1)])
  }


  // delete team from bracket after hold
  const longPress = useLongPress(stage, () => {
    // callback
    //console.log('data: ' + holdData.bracket)
    const updatedBrackets = allBrackets.map(stage =>
      stage.map(bracket => {
        if(bracket.id === holdData.bracket) {
          bracket[holdData.team] = ''
        }
        return bracket
      }))
    toast('❌ Team removed!')

  }, 
  2000,         // 2s hold
  setHoldData   // setting the data for deletion
);


  const declareWinner = (iBracket, teamId) => {
    //console.log('The winner is '+ teamId)
    setWinner(teamId)
  }
  
  // all the team id:name pairs
  const teamSelectOptions = teams.map((team) => ({[team.id] : team.name}))
  //console.log(teamSelectOptions)

  const iconSize = 25;
  
  return (
    <>
      <div className='flex flex-col w-full h-full justify-around gap-4'>  
          {allBrackets[stage].map((bracket, i) => {

            const team1Name = getTeamName(bracket.team1)
            const team2Name = getTeamName(bracket.team2)
          //  console.log(team1Name+ ' vs '+team2Name)
            const finalStage = stage === allBrackets.length - 1

            return (
              <div 
                key={bracket.id} 
                className='bracket border-2 rounded-lg border-sky-300 h-[150px] w-[200px] flex flex-col justify-evenly'
              >  
                <div 
                  className='p-2 overflow-hidden flex justify-between' 
                  data-bracket={bracket.id} 
                  data-team='team1'
                  {...longPress}
                >
                  {stage === 0 ? 
                    teamOptions(bracket.team1)
                    :
                    team1Name    
                  }

                  {bracket.team1 && !finalStage &&
                    <BsArrowRightCircleFill 
                      size={iconSize}
                      onClick={() => advance(i, bracket.team1)}
                      className='cursor-pointer self-center flex-shrink-0'
                    />
                  }
                  {bracket.team1 && finalStage &&
                    <BsTrophy 
                      size={iconSize*1.4}
                      onClick={() => declareWinner(i, bracket.team1)}
                      className='cursor-pointer self-center flex-shrink-0 bg-yellow-300 rounded-2xl p-1'
                    />
                  }
                         
                </div>
                <div className='border-b-2 border-dashed border-sky-300'>
                </div>
                <div 
                  className='p-2 overflow-hidden flex justify-between'
                  data-bracket={bracket.id} 
                  data-team='team2'
                  {...longPress}
                >
                  {stage === 0 ? 
                    teamOptions(bracket.team2)
                    :
                    team2Name    
                  }

                  {bracket.team2 && !finalStage && 
                  <BsArrowRightCircleFill 
                    size={iconSize}
                    onClick={() => advance(i, bracket.team2)}
                    className='cursor-pointer self-center flex-shrink-0'
                  />
                  } 
                  {bracket.team2 && finalStage &&
                    <BsTrophy 
                      size={iconSize*1.4}
                      onClick={() => declareWinner(i, bracket.team2)}
                      className='cursor-pointer self-center flex-shrink-0 bg-yellow-300 rounded-2xl p-1'
                    />
                  }
                </div>
              </div>
            )}
          )}
      </div>
    </>
  )
}
