import Square from "./Square";
import "../styles/Board.css";
import { useState, Dispatch, SetStateAction } from "react";

interface BoardProps {
  board: string[];
  handleClick: (index: number) => void
}

export default function Board({ board, handleClick }: BoardProps) {

  return (
    <div className="board">
      <div className="board-row">
        <Square
          value={board[0]}
          onSquareClick={() => handleClick(0)}
          classe={["square-left"]}
        />
        <Square value={board[1]} onSquareClick={() => handleClick(1)} />
        <Square value={board[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square
          value={board[3]}
          onSquareClick={() => handleClick(3)}
          classe={["square-left"]}
        />
        <Square value={board[4]} onSquareClick={() => handleClick(4)} />
        <Square value={board[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square
          value={board[6]}
          onSquareClick={() => handleClick(6)}
          classe={["square-left", "square-bottom"]}
        />
        <Square
          value={board[7]}
          onSquareClick={() => handleClick(7)}
          classe={["square-bottom"]}
        />
        <Square
          value={board[8]}
          onSquareClick={() => handleClick(8)}
          classe={["square-bottom"]}
        />
      </div>
    </div>
  );
}
