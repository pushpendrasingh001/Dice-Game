import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import './App.css'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
  <p className="copy_right">  All Right Reserved by: Pushpendra Singh</p>
    </>
  );
}

export default App;
