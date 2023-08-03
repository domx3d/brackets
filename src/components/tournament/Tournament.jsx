import React from 'react'
import Teams from './Teams'
import Brackets from './Brackets'
import SwitchSelector from "react-switch-selector";
import { useState, useEffect, createContext } from 'react';
import WinnerModal from './WinnerModal';
import { ToastContainer} from 'react-toastify';

const options = [
  {
      label: "Teams",
      value: true,
      selectedBackgroundColor: "rgb(14 165 233)",
  },
  {
      label: "Brackets",
      value: false,
      selectedBackgroundColor: "rgb(251 191 36)"
  }
];


export const TournamentContext = createContext()


export default function Tournament() {
  
  const [create, setCreate] = useState(true)
  const [teams, setTeams] = useState(JSON.parse(window.localStorage.getItem('teams') || "[]"));
  const [allBrackets, setAllBrackets] = useState(JSON.parse(window.localStorage.getItem('brackets') || "[]"))
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    window.localStorage.setItem('teams', JSON.stringify(teams))
  }, [teams]);

  useEffect(() => {
    if(!winner) return
  }, [winner])

  const getTeamName = (teamId) => {
    return teams.find(team => team.id === teamId)?.name ?? ''
  }

  const getWinningPlayers = (winTeamId) => {
    return teams.find(team => team.id ===winTeamId)?.players ?? ''
  }

  return (

    <TournamentContext.Provider 
      value={[teams, setTeams, allBrackets, setAllBrackets, setWinner, getTeamName]}>
      <div id="section2 " 
        className='bg-white py-16 px-4 flex flex-col w-screen min-w-fit'>
        <div className='w-[60vw] h-[2em] self-start sticky left-[20vw] mb-16'>
          <SwitchSelector
            onChange={(newValue) => setCreate(newValue)}
            options={options}
            initialSelectedIndex={0}
            backgroundColor={"#353b48"}
            fontColor={"#f5f6fa"}

          />
        </div>
        
        { create && <Teams />}
        { !create && <Brackets />}
        { winner &&
        <WinnerModal
          winner={getTeamName(winner)}
          winningPlayers={getWinningPlayers(winner)}
          handleClose={() => setWinner(null)}
        />
        }
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </TournamentContext.Provider>
  )
}
