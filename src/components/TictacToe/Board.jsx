import Square from "./Square";
export default function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        const nextSquares = squares.slice();
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner " + winner;
    } else {
        status = "Next Player " + (xIsNext ? "X" : "O");
    }
    let boardSquares = [];
    for (let row = 0; row < 3; row++) {
        let boardRow = [];
        for (let col = 0; col < 3; col++) {
            boardRow.push(
                <Square
                    value={squares[row * 3 + col]}
                    onSquareClick={() => handleClick(row * 3 + col)}
                />
            );
        }
        boardSquares.push(<div className="board-row">{boardRow}</div>)
    }
    return (
        <>
            <div className="status">{status}</div>
            {boardSquares}
            {/* <div className="board-row">
                <Square
                    value={squares[0]}
                    onSquareClick={() => handleClick(0)}
                />
                <Square
                    value={squares[1]}
                    onSquareClick={() => handleClick(1)}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => handleClick(2)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[3]}
                    onSquareClick={() => handleClick(3)}
                />
                <Square
                    value={squares[4]}
                    onSquareClick={() => handleClick(4)}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => handleClick(5)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[6]}
                    onSquareClick={() => handleClick(6)}
                />
                <Square
                    value={squares[7]}
                    onSquareClick={() => handleClick(7)}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => handleClick(8)}
                />
            </div> */}
        </>
    );
}

function calculateWinner(squares) {
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
    return null;
}
