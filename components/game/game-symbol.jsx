import { SYMBOL_X, SYMBOL_O } from './constants';

export function GameSymbol({ symbol }) {
    const getSymbolClassName = (symbol) => {
        if (symbol === SYMBOL_X) return "text-red-500";
        else if (symbol === SYMBOL_O) return "text-blue-500";
        return '';
    };

    return <span className={`text-3xl ${getSymbolClassName(symbol)}`}>{symbol}</span>;
}