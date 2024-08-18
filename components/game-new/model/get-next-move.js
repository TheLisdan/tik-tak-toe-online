import { MOVE_ORDER } from "../constants";

export function getNextMove(currentMove, playersCount, playersTimeOver) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );

  const currentIndex = slicedMoveOrder.indexOf(currentMove);
  const nextIndex = (currentIndex + 1) % slicedMoveOrder.length;
  return slicedMoveOrder[nextIndex];
}
