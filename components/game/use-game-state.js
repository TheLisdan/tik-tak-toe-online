import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

function getNextMove(currentMove) {
  const currentIndex = MOVE_ORDER.indexOf(currentMove);
  const nextIndex = (currentIndex + 1) % MOVE_ORDER.length;
  return MOVE_ORDER[nextIndex];
}

export function useGameState() {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    currentMove: GAME_SYMBOLS.CROSS,
    cells: Array(19 * 19).fill(null),
  }));
  const nextMove = getNextMove(currentMove);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove),
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
