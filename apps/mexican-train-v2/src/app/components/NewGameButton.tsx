import { useAppDispatch } from "../hooks";

function NewGameButton() {
  // reset the game
  // delete all the players
  const dispatch = useAppDispatch();
  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
  };
  return (
    <button onClick={resetGame}>
      New Game
    </button>
  );
}

export default NewGameButton;