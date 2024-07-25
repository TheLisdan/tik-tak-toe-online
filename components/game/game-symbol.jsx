import styles from './game.module.css';
import { SYMBOL_X, SYMBOL_O } from './constants';

export function GameSymbol({ symbol }) {
    const getSymbolClassName = (symbol) => {
        if (symbol === SYMBOL_X) return styles['symbol-x'];
        else if (symbol === SYMBOL_O) return styles['symbol-o'];
        return '';
    };

    return <span className={`${styles["symbol"]} ${getSymbolClassName(symbol)}`}>{symbol}</span>;
}