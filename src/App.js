import "./App.css";
import { useState } from "react";
import Button from "./Componennts/Button";
import Player from "./Componennts/Player";
import Opponent from "./Componennts/Opponent";
import Container from "./Componennts/Container";
import PlayerResult from "./Componennts/PlayerResult";
import OpponentResult from "./Componennts/OpponentResult";
import LoseWon from "./Componennts/LoseWon";
import Highscore from "./Componennts/Highscore";

function App() {
  const [loseWon, setLoseWon] = useState("Your Result");
  const [highscore, setHighscore] = useState(0);
  const [playerResult, setPlayerResult] = useState(0);
  const [opponentResult, setOpponentResult] = useState(0);

  const random = (min, max) => {
    let player = Math.floor(Math.random() * (max - min)) + min;
    let opponent = Math.floor(Math.random() * (max - min)) + min;
    setPlayerResult(player);
    setOpponentResult(opponent);
    if (player > opponent) {
      setHighscore(highscore + 1);
      setLoseWon("You Won");
    } else if (player == opponent) {
      setLoseWon("Draw, try again");
    } else {
      setHighscore(0);
      setLoseWon("You lose");
    }
  };

  return (
    <div className="App">
      <LoseWon loseWon={loseWon} />
      <Highscore highscore={highscore} />
      <Container>
        <Player />
        <Opponent />
      </Container>
      <Button random={random} />
      <Container>
        <PlayerResult playerResult={playerResult} />
        <OpponentResult opponentResult={opponentResult} />
      </Container>
    </div>
  );
}

export default App;
