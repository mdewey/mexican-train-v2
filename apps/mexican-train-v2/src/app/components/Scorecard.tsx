import { useMemo, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { Player } from '../utils/player/factory';
import PlayerRow from './PlayerRow';



function Scorecard() {
  const dispatch = useAppDispatch();
  const players = useAppSelector(state => state.game.players);
  const topScores = useMemo(() => {
    let lowestFoundScore = 1000;
    let highestFoundScore = -1;
    players.forEach(player => {
      const totalScore = Object
        .values(player.scores)
        .reduce((a, b) => a + b, 0);
      // TODO: deal with ties
      if (totalScore < lowestFoundScore) {
        lowestFoundScore = totalScore;
      }
      if (totalScore > highestFoundScore) {
        highestFoundScore = totalScore;
      }
    });
    return { lowestFoundScore, highestFoundScore };
  }, [players]);
  useEffect(() => {
    dispatch({ type: 'SET_TOP_SCORES', payload: topScores });
  }, [dispatch, topScores]);

  return (
    <div className='scorecard'>
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