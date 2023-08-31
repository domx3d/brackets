import React, {useState, useEffect, useContext, useRef} from 'react'
import { BsPlusCircle, BsFillTrashFill, BsXLg, BsX } from 'react-icons/bs'
import { TournamentContext } from './Tournament';
import { ToastContainer, toast } from 'react-toastify';


export default function Teams() {

  const [teams, setTeams, allBrackets, setAllBrackets] = useContext(TournamentContext)
  const [newTeamAdded, setNewTeamAdded] = useState(false)
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)

  useEffect(() => {
    if(newTeamAdded)
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    setNewTeamAdded(false)
  }, [teams])

  const addTeam = () => {
    if(teams.length >= 32) return // max 32 teams
    const newTeam = {
      id: Date.now(),
      name: 'Team'+(teams.length + 1),
      players: []
    };

    setNewTeamAdded(true)
    setTeams(prevTeams => [...prevTeams, newTeam]);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    
  };

  const deleteTeam = (teamId) => {
    const updatedTeams = teams.filter(team => {
      return team.id !== teamId
    });
    setTeams(updatedTeams)
    console.log(allBrackets)
    const updatedBrackets = allBrackets.map(stage =>
      stage.map(bracket => {
        if(bracket?.team1 === teamId)
          bracket.team1 = ""
        else if(bracket?.team2 === teamId) {
          bracket.team2 = ""
        }
        return bracket
      }))
      setAllBrackets(updatedBrackets)
      console.log(updatedBrackets)
  }

  const handleTeamNameChange = (event, teamId) => {
    const updatedTeams = teams.map(team => {
      if (team.id === teamId) {
        return { ...team, name: event.target.value };
      }
      return team;
    });

    setTeams(updatedTeams);
  };

  const addPlayer = (teamId) => {
    
    const updatedTeams = teams.map(team => {
      if (team.id === teamId) {
        const newPlayer = {
          id: Date.now(),
          name: ''
        };
        return { ...team, players: [...team.players, newPlayer] };
      }
      return team;
    });

    setTeams(updatedTeams);
  };

  const handlePlayerNameChange = (event, teamId, playerId) => {
    const updatedTeams = teams.map(team => {
      if (team.id === teamId) {
        const updatedPlayers = team.players.map(player => {
          if (player.id === playerId) {
            return { ...player, name: event.target.value };
          }
          return player;
        });
        return { ...team, players: updatedPlayers };
      }
      return team;
    });

    setTeams(updatedTeams);
  };

  const deletePlayer = (teamId, playerId) => {
    const updatedTeams = teams.map(team => {
      if (team.id === teamId) {
        const updatedPlayers = team.players.filter(player => {
          return player.id !== playerId;
        });
        return { ...team, players: updatedPlayers };
      }
      return team;
    });
    setTeams(updatedTeams);
  }
   const handleKeyDown = (event) => {
    if(event.key === 'Enter')
      event.target.blur()
   }

   const handleSort = () => {
    // switch position for dragged items
    let _teams = [...teams]
    const draggedItem = _teams.splice(dragItem.current, 1)[0]
    _teams.splice(dragOverItem.current, 0, draggedItem)

    setTeams(_teams)
    dragItem.current = null
    dragOverItem.current = null
   }

   const deleteAllTeams = () => {
    setTeams([])
    setAllBrackets([])
    toast('☠️ All the teams have been deleted!')
   }



  return (
    
      <div id='teams_div' className='flex flex-col p-4 items-center '>
        {teams.length === 0 ?
          <div className='flex flex-col mb-8 p-4 rounded-xl border-0  border-cyan-500 md:w-[50%] shadow-xl'>
           <h4 className='text-center text-slate-500'>
            Add up to <strong>32</strong> teams. <br/> Adding players is optional. They will not show in the brackets.</h4>
          </div>
          :
          <div className='w-full md:w-[50%] flex justify-end items-center'>
            <button 
              className=' flex items-center justify-center p-4 rounded-md border-2 font-medium my-6 py-3 text-black hover:scale-105 duration-300' 
              onClick={deleteAllTeams}
            >
              Delete all
            </button>
          </div>
        }
        
        {teams.map((team, index) => (
          <div key={team.id} 
            draggable
            onDragStart={(e)=> dragItem.current = index}
            onDragEnter={(e)=> dragOverItem.current = index}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
            

            className='flex flex-col mb-16 p-4 rounded-xl border-0  border-cyan-500 md:w-[50%] shadow-xl'>
            <div className='flex justify-center items-center'>
              <input
                type="text"
                value={team.name}
                onChange={(event) => handleTeamNameChange(event, team.id)}
                className='text-2xl font-bold m-auto w-[80%] text-center'
                onKeyDown={handleKeyDown}
              />
              <BsFillTrashFill 
                onClick={() => deleteTeam(team.id)}
                className='cursor-pointer'
              />
              
            </div>
            <div className=' solid border-b-2 border-gray-500 w-full my-4'></div>

            {team.players.map(player => (
              <div key={player.id} 
                className='flex justify-center'>
                <input  
                  type="text"
                  placeholder='New player'
                  value={player.name}
                  onChange={(event) => handlePlayerNameChange(event, team.id, player.id)}
                  className='text-center w-[60%] m-auto'
                />
                <BsX 
                  onClick={() => deletePlayer(team.id, player.id)}
                  className='cursor-pointer'
                />
              </div>
            ))}
            
              
              <button 
                onClick={() => addPlayer(team.id)}
                className='mt-4'  
              >
                <div className='flex justify-center gap-2 items-center'>
                  {team.players.length === 0 &&
                    <div className='text-gray-500' >
                      Add players
                    </div>
                  }
                  <BsPlusCircle  size={20}
                  className='hover:scale-110 duration-300'/>
                </div>
              </button>
          </div>
        ))}
        <button className=' flex items-center justify-center p-4 gap-2 rounded-md border-2 font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-300' 
          onClick={addTeam}
        >
          <BsPlusCircle size={20} className='mr-2'/>
          Add Team
        </button>
      </div>
  )
}
