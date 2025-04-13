import { useState } from "react";
import "../styles/App.css";
import Board from "./Board";
import DarkModeLogo from "../assets/dark-mode.svg";
import LightModeLogo from "../assets/light-mode.svg";
function App() {
  const initialBoard = Array(9).fill("");
  const [board, setBoard] = useState<string[]>(initialBoard);

  const [darkMode, setDarkMode] = useState(false);

  const [xTurn, setXTurn] = useState(true);

  function caluclateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    if (squares.every((square) => square !== "")) {
      return "Draw";
    }
  }

  const handleClick = (index: number) => {
    if (board[index] || caluclateWinner(board)) {
      return;
    }
    const newBoard = [...board];
    if (xTurn) {
      newBoard[index] = "X";
      setXTurn(false);
    } else {
      newBoard[index] = "O";
      setXTurn(true);
    }
    setBoard(newBoard);
  };

  function onReset() {
    setBoard(initialBoard);
    setXTurn(true);
  }

  const winner = caluclateWinner(board);

  const status = !winner
    ? `Au tour de ${xTurn ? "X" : "O"}`
    : winner === "Draw"
    ? "Match Nul !"
    : `${winner} a gagné !`;

  return (
    <div className="App">
      <button
        className="dark-mode-button"
        onClick={() => {
          document.body.classList.toggle("dark-mode");
          setDarkMode(!darkMode);
        }}
      >
        <img
          className="dark-mode-icon"
          src={darkMode ? LightModeLogo : DarkModeLogo}
          alt="Switch Dark Mode"
        />
      </button>
      <h1 className="title-text">Tic Tac Toe</h1>

      <button className="reset-button" onClick={onReset}>
        New Game
      </button>

      {status}
      <Board board={board} handleClick={handleClick} />
    </div>
  );
}

export default App;
