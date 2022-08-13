import { useCallback, useState } from 'react';

import { useAppDispatch } from '../hooks'


function AddPlayer() {
  const [newPlayer, setNewPlayer] = useState<string>('');
  const dispatch = useAppDispatch();
  const addPlayer = useCallback((player: string) => {
    console.log(player);
    dispatch({ type: 'ADD_PLAYER', payload: { name: player } });
  }, [dispatch]);

  return (
    <section>
      <h5>Add player </h5>

      <input
        type="text"
        placeholder="Ex: Bob"
        onChange={e => setNewPlayer(e.target.value)}
        value={newPlayer}
      />
      <button onClick={() => addPlayer(newPlayer)}>add</button>
    </section>
  );
}

export default AddPlayer;