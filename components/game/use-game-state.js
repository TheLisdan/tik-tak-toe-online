import { SYMBOL_O, SYMBOL_X } from "./constants";
import { useState } from "react";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }

  return null;
};

export function useGameState() {
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState(null);

  const handleCellClick = (index) => {
    if (cells[index] || winnerSequence) return;

    const newCells = cells.slice();
    newCells[index] = currentStep;
    const winner = computeWinner(newCells);

    setCells(newCells);
    setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
    if (winner) {
      setWinnerSequence(winner);
    }
  };

  const handleRestart = () => {
    setCells([null, null, null, null, null, null, null, null, null]);
    setCurrentStep(SYMBOL_X);
    setWinnerSequence(null);
  };

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : null;
  const isDraw = !winnerSymbol && cells.filter(Boolean).length === cells.length;

  return {
    cells,
    currentStep,
    winnerSymbol,
    winnerSequence,
    isDraw,
    handleCellClick,
    handleRestart,
  };
}
