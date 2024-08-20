import { MOVE_ORDER } from "../constants";

export function getNextMove(gameState) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, gameState.playersCount).filter(
    (symbol) => gameState.timers[symbol] > 0,
  );

  const currentIndex = slicedMoveOrder.indexOf(gameState.currentMove);
  const nextIndex = (currentIndex + 1) % slicedMoveOrder.length;
  return slicedMoveOrder[nextIndex];
}
