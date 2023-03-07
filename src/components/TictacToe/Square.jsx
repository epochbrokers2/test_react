const Square = ({ value, onSquareClick, winnerLine, squareWin }) => {
    return (
        <button
            className={`square ${squareWin ? "square--winning" : ""}`}
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
};

export default Square;
