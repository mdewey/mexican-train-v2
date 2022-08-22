import { useAppDispatch } from '../hooks';
import { Player } from '../utils/player/factory';



function RemoveButton(player: Player) {
  const dispatch = useAppDispatch();

  const removePlayer = () => {
    dispatch({ type: 'REMOVE_PLAYER', payload: player });
  };

  return (
    <button onClick={removePlayer}>
      <span>X</span>
    </button>
  );
}

export default RemoveButton;