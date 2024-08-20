export function computePlayerTimer(gameState, playerSymbol) {
  return {
    timer: gameState.timers[playerSymbol],
    timerStartAt:
      gameState.currentMove === playerSymbol
        ? gameState.currentMoveStart
        : null,
  };
}
