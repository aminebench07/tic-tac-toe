import Square from "./Square";
import "../styles/Board.css";
export default function Board() {
  return (
    <div className="board">
      <div className="board-row">
        <Square classe={["square-left"]} />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square classe={["square-left"]} />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square classe={["square-left", "square-bottom"]} />
        <Square classe={["square-bottom"]} />
        <Square classe={["square-bottom"]} />
      </div>
    </div>
  );
}
