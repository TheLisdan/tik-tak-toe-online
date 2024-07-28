import { GameSymbol } from "./game-symbol";
import { clsx } from "clsx";

export function GameCell({ index, symbol, onClick, isWinner }) {
  return (
    <button
      title="Кликните, чтобы сделать ход"
      key={index}
      type="button"
      className={clsx(
        "flex justify-center items-center w-24 h-24 text-3x border border-white cursor-pointer",
        {
          "bg-red-100": isWinner,
          "bg-slate-100": !isWinner,
        },
      )}
      onClick={onClick}
    >
      <GameSymbol symbol={symbol} />
    </button>
  );
}
