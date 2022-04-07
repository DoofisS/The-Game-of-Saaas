import "./App.css";
import { useState } from "react";
import Button from "./Components/Button/Button";
import Player from "./Components/Player/Player";
import Opponent from "./Components/Opponent/Opponent";
import Container from "./Containers/Container";
import PlayerResult from "./Components/PlayerResult/PlayerResult";
import OpponentResult from "./Components/OpponentResult/OpponentResult";
import LoseWon from "./Components/LoseWon/LoseWon";
import Streak from "./Components/Streak/Streak";
import BestStreak from "./Components/BestStreak/BestStreak";
import Health from "./Components/Health/Health";

function App() {
  const [loseWon, setLoseWon] = useState("Your Result");
  const [streak, setStreak] = useState(0);
  const [playerResult, setPlayerResult] = useState(0);
  const [opponentResult, setOpponentResult] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [health, setHealth] = useState(3);

  const bestStreakCheck = () => {
    if (streak > bestStreak) {
      setBestStreak(streak);
    }
  };

  if (health == 0) {
    setStreak(0);
    setHealth(3);
    setPlayerResult(0);
    setOpponentResult(0);
  }

  const random = (min, max) => {
    let player = Math.floor(Math.random() * (max - min)) + min;
    let opponent = Math.floor(Math.random() * (max - min)) + min;
    setPlayerResult(player);
    setOpponentResult(opponent);
    bestStreakCheck();
    if (player > opponent) {
      setStreak(streak + 1);
      setLoseWon("You Won");
    } else if (player == opponent) {
      setLoseWon("Draw, try again");
    } else {
      setHealth(health - 1);
      setLoseWon("You lose");
    }
  };

  return (
    <div className="App Background">
      <Health health={health} />
      <BestStreak bestStreak={bestStreak} />
      <LoseWon loseWon={loseWon} />
      <Streak streak={streak} />
      <Container>
        <Player />
        <Opponent />
      </Container>
      <Button random={random} bestStreakCheck={bestStreakCheck} />
      <Container>
        <PlayerResult playerResult={playerResult} />
        <OpponentResult opponentResult={opponentResult} />
      </Container>
    </div>
  );
}

export default App;
