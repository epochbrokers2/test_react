const Square = ({ value, onSquareClick, winnerLine }) => {
    return (
        <button className={"square " + (winnerLine ? "square--winning" : null)} onClick={onSquareClick}>
            {value}
        </button>
    );
};

export default Square;
