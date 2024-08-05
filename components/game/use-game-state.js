import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

function getNextMove(currentMove, playersCount) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);

  const currentIndex = slicedMoveOrder.indexOf(currentMove);
  const nextIndex = (currentIndex + 1) % slicedMoveOrder.length;
  return slicedMoveOrder[nextIndex];
}

export function useGameState(playersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    currentMove: GAME_SYMBOLS.CROSS,
    cells: Array(19 * 19).fill(null),
  }));
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
  };
}
