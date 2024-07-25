import styles from './game.module.css';
import { GameSymbol } from './game-symbol';

export function GameCell({ index, symbol, onClick, isWinner }) {
    return <button
        title="Кликните, чтобы сделать ход"
        key={index}
        type="button"
        className={`${styles['cell']} ${isWinner ? styles['cell-winner'] : ''}`}
        onClick={onClick}
    >
        <GameSymbol symbol={symbol} />
    </button>
}