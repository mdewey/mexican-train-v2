import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks'

function SetRounds() {
  const totalRounds = useAppSelector(state => state.game.totalRounds);
  const [rounds, setRounds] = useState<number>(totalRounds);
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      dispatch({ type: 'SET_TOTAL_ROUNDS', payload: { totalRounds: rounds } });
    },
    [rounds, dispatch]
  )
  return (
    <section>
      <h5>Starting at</h5>
      <input
        type="number"
        onChange={e => setRounds(parseInt(e.target.value))}
        value={rounds}
      />
    </section>
  );
}

export default SetRounds;