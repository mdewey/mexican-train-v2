import { useMemo } from 'react';
import { useAppSelector } from '../hooks';
import { Player } from '../utils/player/factory'


function PlayerRow(player: Player) {
  // get the total rounds, and start at the total rounds and display all the players count for that round and lower
  const totalRounds = useAppSelector(state => state.game.totalRounds);
  console.log('playerrow', { totalRounds });

  const totalScore = useMemo(() => {
    let total = 0;
    for (let i = totalRounds; i >= 1; i--) {
      total += player.scores[i];
    }
    return total;
  }, [player.scores, totalRounds]);

  // if totalRounds is NaN do not display the player row
  if (isNaN(totalRounds)) {
    return <i>{player.name} in the waiting room</i>;
  }


  return (
    <div>
      <h5>{player.name}</h5>
      <h6>total score:{totalScore}</h6>
      <ul>
        {Array(totalRounds).fill(0).map((_, index) => {
          const round = totalRounds - index;
          return <li key={index}>
            score:{player.scores[round]}<br />
          </li>
        })}
      </ul>
    </div>
  );
}

export default PlayerRow;