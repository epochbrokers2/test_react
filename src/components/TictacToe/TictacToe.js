import React, { useState } from "react";
import Board from "./Board";
import "./TictacToe.css";

const TictacToe = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [sort, setSort] = useState(false)
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }
    const moves = history.map((squares, move) => {
        let description;
        // const col = 1 + currentMove % 3;
        // const row = 1 + Math.floor(currentMove / 3);
        // console.log(squares)
        if (move > 0) {
            description = "Go to move #" + move;
            // description = `Go to move #${move} (${row}, ${col})`;
        } else {
            description = "Go to game start";
        }
        return (
            <li key={move}>
                <button
                    onClick={() => {
                        jumpTo(move);
                    }}
                >
                    {description}
                </button>
            </li>
        );
    });
    return (
        <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
                <h5>You are at move {currentMove}</h5>
            </div>
            <div className="game-info">
                <ol>{!sort ? moves : moves.reverse()}</ol>
                <button onClick={()=> {setSort(!sort)}}>Sort By {sort ? "Descending": "Ascending"}</button>
            </div>
            {}
        </div>
    );
};

export default TictacToe;
