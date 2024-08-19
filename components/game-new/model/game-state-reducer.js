import { GAME_SYMBOLS } from "../constants";
import { getNextMove } from "./get-next-move";

export const GAME_STATE_ACTION = {
  CELL_CLICK: "cell-click",
};

export const initGameState = ({ playersCount }) => ({
  currentMove: GAME_SYMBOLS.CROSS,
  cells: Array(19 * 19).fill(null),
  playersCount,
});

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTION.CELL_CLICK: {
      const { index } = action;
      if (state.cells[index]) {
        return state;
      }

      const nextMove = getNextMove(state);

      return {
        ...state,
        currentMove: nextMove,
        cells: state.cells.map((cell, cellIndex) =>
          cellIndex === index ? state.currentMove : cell,
        ),
      };
    }

    default: {
      return state;
    }
  }
};
