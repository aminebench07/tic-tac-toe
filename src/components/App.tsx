import { useState } from "react";
import "../styles/App.css";
import Board from "./Board";

function App() {
  const initialBoard = Array(9).fill("");
  const [board, setBoard] = useState<string[]>(initialBoard);
  return (
    <div className="App">
      <button className="reset-button" onClick={() => setBoard(initialBoard)}>
        New Game
      </button>
      <Board board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
