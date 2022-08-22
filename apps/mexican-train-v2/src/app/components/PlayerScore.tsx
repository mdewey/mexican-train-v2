import { useState, useCallback } from 'react';
import { useAppDispatch } from '../hooks';
import { Player } from '../utils/player/factory';

function PlayerScore({ player, round }: { player: Player; round: number }) {
  const [isEditing, setIsEditing] = useState(false);
  const [score, setScore] = useState(player.scores[round] || 0);

  const dispatch = useAppDispatch();

  const updateScore = useCallback(() => {
    dispatch({ type: 'UPDATE_SCORE', payload: { player, round, score } });
    setIsEditing(false);
  }, [dispatch, player, round, score]);

  const onClick = (e: { detail: number }) => {
    if (e.detail === 2) {
      setIsEditing(true);
    }
  };
  const onChange = (e: any) => {
    setScore(e.target.value);
  };

  const onKeyDown = useCallback((e: any) => {
    if (e.key === 'Enter') {
      updateScore();
    }
  }, [updateScore]);

  const onBlur = useCallback(() => {
    updateScore();
  }, [updateScore]);

  if (isEditing) {
    return (
      <li className='card-square'>
        <input
          type="number"
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          placeholder={score.toString()}
        />
      </li>
    );
  }

  return (
    <li className="player-score card-square" onClick={onClick}>
      {player.scores[round] || 0}<br />
    </li>
  );
}

export default PlayerScore;