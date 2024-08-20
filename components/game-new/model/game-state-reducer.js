import { GAME_SYMBOLS, MOVE_ORDER } from "../constants";
import { getNextMove } from "./get-next-move";

export const GAME_STATE_ACTION = {
  CELL_CLICK: "cell-click",
  TICK: "tick",
};

export const initGameState = ({
  playersCount,
  defaultTimer,
  currentMoveStart,
}) => ({
  currentMove: GAME_SYMBOLS.CROSS,
  cells: Array(19 * 19).fill(null),
  playersCount,
  currentMoveStart,
  timers: MOVE_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTimer;
    }

    return timers;
  }, {}),
});

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTION.CELL_CLICK: {
      const { index, now } = action;
      if (state.cells[index]) {
        return state;
      }

      const nextMove = getNextMove(state);

      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: nextMove,
        currentMoveStart: now,
        cells: updateCells(state, index),
      };
    }
    case GAME_STATE_ACTION.TICK: {
      const { now } = action;
      if (!isTimeOver(state, now)) {
        return state;
      }

      const nextMove = getNextMove(state);

      return {
        ...state,
        timers: updateTimers(state, now),
        currentMove: nextMove,
        currentMoveStart: now,
      };
    }

    default: {
      return state;
    }
  }
};

function updateTimers(gameState, now) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentMove];

  return {
    ...gameState.timers,
    [gameState.currentMove]: timer - diff,
  };
}

function updateCells(gameState, index) {
  return gameState.cells.map((cell, cellIndex) =>
    cellIndex === index ? gameState.currentMove : cell,
  );
}

function isTimeOver(gameState, now) {
  const timer = updateTimers(gameState, now)[gameState.currentMove];
  return timer <= 0;
}
