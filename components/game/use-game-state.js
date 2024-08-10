import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { getNextMove, computeWinner } from "./model";

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    currentMove: GAME_SYMBOLS.CROSS,
    cells: Array(19 * 19).fill(null),
  }));

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, playersCount),
        cells: lastGameState.cells.map((cell, cellIndex) =>
          cellIndex === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
  };
}
