import { GameSymbol } from "./game-symbol";

export function GameInfo({ winnerSymbol, currentStep, isDraw }) {
  const infoStyles = "mb-4 text-2xl h-8";

  if (isDraw) {
    return <div className={infoStyles}>Ничья</div>;
  } else if (winnerSymbol) {
    return (
      <div className={infoStyles}>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className={infoStyles}>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
