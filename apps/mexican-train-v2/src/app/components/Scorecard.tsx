import React from 'react';
import { useAppSelector } from '../hooks'
import { Player } from '../utils/player/factory';
import PlayerRow from './PlayerRow';



function Scorecard() {
  const players = useAppSelector(state => state.game.players);
  console.log(players)
  return (
    <div>
      <h1>Scorecard</h1>
      <ul>
        {players.map((player: Player) => (
          <li key={player.id}><PlayerRow {...player} /></li>
        ))}
      </ul>
    </div>
  );
}

export default Scorecard;