import React from 'react';
import { useAppDispatch } from '../hooks';

const ClearScoresButton = () => {
  // reset the game
  // delete all the players
  const dispatch = useAppDispatch();
  const resetScore = () => {
    dispatch({ type: "RESET_SCORES" });
  };
  return (
    <button onClick={resetScore}>
      Reset Scores
    </button>
  );
};

export default ClearScoresButton;