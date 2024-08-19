import { useReducer } from "react";
import { GAME_SYMBOLS } from "../constants";
import { computeWinner } from "./compute-winner";
import { getNextMove } from "./get-next-move";

export function useGameState(playersCount) {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount },
    initGameState,
  );

  const winnerSequence = computeWinner(gameState.cells);
  const nextMove = getNextMove(gameState.currentMove, playersCount);
  const winnerSymbol =
    nextMove === gameState.currentMove
      ? gameState.currentMove
      : gameState.cells[winnerSequence?.[0]];

  return {
    cells: gameState.cells,
    currentMove: gameState.currentMove,
    nextMove,
    winnerSequence,
    winnerSymbol,
    dispatch,
  };

  /*
  const [{ cells, currentMove, playersTimeOver }, setGameState] = useState(
    () => ({
      currentMove: GAME_SYMBOLS.CROSS,
      cells: Array(19 * 19).fill(null),
      playersTimeOver: [],
    }),
  );

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, playersCount, playersTimeOver);

  const winnerSymbol =
    nextMove === currentMove ? currentMove : cells[winnerSequence?.[0]];

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(
          lastGameState.currentMove,
          playersCount,
          lastGameState.playersTimeOver,
        ),
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
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  };
  */
}
