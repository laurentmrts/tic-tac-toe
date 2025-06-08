import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((curentActivePlayer) => curentActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') { //check du dernier tour joue
        currentPlayer = 'O';
      }

      // updatedTurns
      return [
        {square: {row: rowIndex, col: colIndex}, player: currentPlayer}, //objet pour Gameboard
        ...prevTurns // infos pour les logs
      ];
    });
  }

  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
        <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
      </ol>
      <GameBoard
        onSelectSquare={handleSelectSquare}
        turns={gameTurns}
      />
    </div>
    LOG
  </main>;
}

export default App