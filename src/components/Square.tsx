import { useState } from "react";
import "../styles/Square.css";
interface SquareProps {
    classe?: string[];
    value: string;
    onSquareClick: () => void;
}

export default function Square({ classe, value, onSquareClick }: SquareProps) {
    return <button onClick={onSquareClick} className={`square ${classe?.join(" ")}`}>{value}</button>;
}
