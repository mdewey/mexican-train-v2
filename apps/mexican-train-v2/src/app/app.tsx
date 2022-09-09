// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from 'react';
import styles from './app.module.scss';
import AddPlayer from './components/AddPlayer';
import ClearScoresButton from './components/ClearScoresButton';
import NewGameButton from './components/NewGameButton';
import Scorecard from './components/Scorecard';
import SetRounds from './components/SetRounds';
import Home from './pages/Home';

export function App() {
  return (
    <>
      <Home />
      <section className="manage-game">
        <NewGameButton />
        <ClearScoresButton />
        <AddPlayer />
        <SetRounds />
      </section>
      <Scorecard />
      <div />
    </>
  );
}

export default App;
