import "../styles/Square.css";
interface SquareProps {
    classe?: string[];
}

export default function Square({ classe }: SquareProps) {
  return <button className={`square ${classe?.join(" ")}`}></button>;
}
