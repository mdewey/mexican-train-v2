import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';

function SetRounds() {
  const totalRounds = useAppSelector(state => state.game.totalRounds);
  console.log('totalRounds', totalRounds);
  const [rounds, setRounds] = useState<number>(totalRounds);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setRounds(totalRounds);
  }, [totalRounds]);
  useEffect(
    () => {
      dispatch({ type: 'SET_TOTAL_ROUNDS', payload: { totalRounds: rounds } });
    },
    [rounds, dispatch]
  );
  return (
    <section className='set-rounds'>
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