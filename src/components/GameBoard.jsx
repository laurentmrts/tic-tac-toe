const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn; //destructuration
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  //
  // function handleSelectSquare(rowIndex, columnIndex) {
  //   // changement du state de facon immuable/immutable en utilisant un nouveau pointeur
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
  //     updatedGameBoard[rowIndex][columnIndex] = activePlayerSymbol;
  //     return updatedGameBoard;
  //   });
  //
  //   onSelectSquare(); //executed here
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, columnIndex) => (
            <li key={columnIndex}>
              <button onClick={() => onSelectSquare(rowIndex, columnIndex)}>
                {playerSymbol}
              </button>
            </li>
          ))}
        </ol>
      </li>)}
    </ol>
  );
}