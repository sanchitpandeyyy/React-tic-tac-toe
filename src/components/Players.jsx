import React from 'react'

const Players = ({name,symbol}) => {
  return (
    <li>
          <span className="player-info">
          <span className="player-name">{name}</span>
          <span className="player-symbol">{symbol}</span>
          </span>
          <button>Edit</button>
        </li>
  )
}

export default Players