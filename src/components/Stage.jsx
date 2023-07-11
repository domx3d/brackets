import React, {useContext} from 'react'
import {BsArrowRightCircleFill, BsTrophy} from 'react-icons/bs'
import { TournamentContext } from './Tournament'

export default function Stage({stage}) {

  const [teams, setTeams, allBrackets, setAllBrackets, setWinner] = useContext(TournamentContext)

  const getTeamName = (teamId) => {
    return teams.find(team => team.id === teamId)?.name ?? ''
  }

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

  const declareWinner = (iBracket, teamId) => {
    console.log('The winner is '+ teamId)
    setWinner(teamId)
  }

  const iconSize = 25;
  
  return (
    <div className='flex flex-col w-full h-full justify-around gap-4'>  
          {allBrackets[stage].map((bracket, i) => {
            
            //console.log('team: '+teams[i].id)
            //console.log('bracket: '+bracket.team1)

            const team1Name = getTeamName(bracket.team1)
            const team2Name = getTeamName(bracket.team2)

            const finalStage = stage === allBrackets.length - 1

            return (
              <div 
                key={bracket.id} 
                className='bracket border-2 rounded-lg border-sky-300 h-[150px] w-[200px] flex flex-col justify-evenly'
              >  
                <div className='p-2 overflow-hidden flex justify-between'>
                  {team1Name}
                  
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
                <div className='p-2 overflow-hidden flex justify-between'>
                  {team2Name }
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
  )
}
/* 
todo:

teams posortamo v brackete - funkcija, lahko random ali po vrsti
teams kot prop v stage, kjer dobimo team names glede na index

bracket - delete team, promote, change team

*/