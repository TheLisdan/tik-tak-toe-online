import styles from './game.module.css';
import { GameSymbol } from './game-symbol';

export function GameInfo({ winnerSymbol, currentStep, isDraw }) {
    if (isDraw) {
        return (
            <div className={styles["game-info"]}>
                Ничья
            </div>
        );
    }

    else if (winnerSymbol) {
        return (
            <div className={styles["game-info"]}>
                Победитель: <GameSymbol symbol={winnerSymbol} />
            </div>
        );
    }

    return (
        <div className={styles["game-info"]}>
            Ход: <GameSymbol symbol={currentStep} />
        </div>
    );
}