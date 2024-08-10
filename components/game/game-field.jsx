import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import { UiButton } from "../uikit/ui-button";

export function GameField({
  className,
  cells,
  currentMove,
  nextMove,
  handleCellClick,
  winnerSequence,
}) {
  const actions = (
    <>
      <UiButton size="md" variant="primary">
        Ничья
      </UiButton>
      <UiButton size="md" variant="outline">
        Сдаться
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />

      <GameGrid>
        {cells.map((cell, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => {
              handleCellClick(index);
            }}
          >
            {cell && <GameSymbol symbol={cell} className="w-5 h-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "shadow-md rounded-2xl bg-white px-8 pt-5 pb-7",
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
          Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400 leading-tight">
          Следующий: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
}

function GameCell({ children, onClick, isWinner }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-orange-600/50",
      )}
    >
      {children}
    </button>
  );
}
