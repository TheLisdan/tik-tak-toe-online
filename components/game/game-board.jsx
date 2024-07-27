import { GameCell } from './game-cell';

export function GameBoard({ cells, winnerSequence, handleCellClick }) {
    return (
        <div className="grid grid-rows-3 grid-cols-3 mb-4">
            {cells.map((symbol, index) => (
                <GameCell
                    key={index}
                    symbol={symbol}
                    isWinner={winnerSequence && winnerSequence?.includes(index)}
                    onClick={() => handleCellClick(index)}
                />
            ))}
        </div>
    );
}