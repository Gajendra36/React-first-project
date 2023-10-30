import React, { useState } from 'react'

function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleclick(){
        setIsEditing((editing) => !editing);
        if(isEditing){
            onChangeName(symbol, playerName)
        }
       
    }

    function handleChange(event){
        console.log(event);
      setPlayerName(event.target.value);
    }

    let editablePlayerName =  <span className="player-name">{playerName}</span>
    if(isEditing){
        editablePlayerName = <input type='text' required  value={playerName} onChange={handleChange}/> 
    }
  return (
    <li className={isActive ? 'active' : undefined}>
    <span className="player">
      {editablePlayerName}
      <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleclick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player
