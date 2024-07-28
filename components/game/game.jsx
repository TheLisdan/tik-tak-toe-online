import { useGameState } from "./use-game-state";
import { GameInfo } from "./game-info";
import { GameBoard } from "./game-board";
import { ResetButton } from "./reset-button";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    winnerSequence,
    isDraw,
    handleCellClick,
    handleRestart,
  } = useGameState();

  return (
    <div className="flex flex-col self-center items-center w-96 p-4 font-['Arial'] border border-black rounded-md mx-auto mt-3">
      <GameInfo
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
        isDraw={isDraw}
      />

      <GameBoard
        cells={cells}
        winnerSequence={winnerSequence}
        handleCellClick={handleCellClick}
      />

      <ResetButton onClick={handleRestart} />
    </div>
  );
}
