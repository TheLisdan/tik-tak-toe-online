import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

export function GameCell({ onClick, isWinner, disabled, symbol }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-orange-400/30",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
}
