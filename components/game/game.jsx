import { useGameState } from "./use-game-state";
import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import styles from "./game.module.css";

export function Game() {
    const {
        cells,
        currentStep,
        winnerSymbol,
        winnerSequence,
        isDraw,
        handleCellClick,
        handleRestart
    } = useGameState();

    return (
        <div className={styles["game"]}>
            <GameInfo
                winnerSymbol={winnerSymbol}
                currentStep={currentStep}
                isDraw={isDraw}
            />

            <div className={styles["game-board"]}>
                {cells.map((symbol, index) => (
                    <GameCell
                        key={index}
                        symbol={symbol}
                        isWinner={winnerSequence && winnerSequence?.includes(index)}
                        onClick={() => handleCellClick(index)}
                    />
                ))}
            </div>

            <button type="button" onClick={handleRestart} className={styles["restart-button"]}>Начать заново</button>
        </div>
    );
}