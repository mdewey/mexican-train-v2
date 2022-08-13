// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import AddPlayer from './components/AddPlayer';
import Scorecard from './components/Scorecard';
import SetRounds from './components/SetRounds';
import Home from './pages/Home';

export function App() {
  return (
    <>
      <Home />
      <AddPlayer />
      <SetRounds />
      <Scorecard />
      <div />
    </>
  );
}

export default App;
