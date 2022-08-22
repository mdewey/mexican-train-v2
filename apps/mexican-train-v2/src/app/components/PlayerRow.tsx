import classNames from 'classnames';
import { useMemo } from 'react';
import { useAppSelector } from '../hooks';
import { Player } from '../utils/player/factory';
import PlayerScore from './PlayerScore';
import RemoveButton from './RemoveButton';


function PlayerRow(player: Player) {
  // get the total rounds, and start at the total rounds 
  // and display all the players count for that round and lower
  const { totalRounds, topScores } = useAppSelector(state => state.game);

  const totalScore = useMemo(() => {
    let total = 0;
    for (let i = totalRounds; i >= 1; i--) {
      total += player.scores[i] || 0;
    }
    return total || 0;
  }, [player.scores, totalRounds]);

  // if totalRounds is NaN do not display the player row
  if (isNaN(totalRounds)) {
    return <i>{player.name} in the waiting room</i>;
  }

  const scoreClass = classNames({
    'player-total': true,
    'highest-score': totalScore === topScores.highestFoundScore,
    'lowest-score': totalScore === topScores.lowestFoundScore,
  });


  return (
    <div className='player'>
      <section className="player-main player-square">
        <h5>{player.name}</h5>
        <h6 className={scoreClass}>{totalScore}</h6>
      </section>
      <ul>
        {Array(totalRounds).fill(0).map((_, index) => {
          const round = totalRounds - index;
          return <PlayerScore key={index} player={player} round={round} />;
        })}
        <li className='delete-square'><RemoveButton {...player} /></li>
      </ul>
    </div>
  );
}

export default PlayerRow;