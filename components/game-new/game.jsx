import { PLAYERS } from "./constants";
import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";
import { useGameState } from "./model/use-game-state";
import { UiButton } from "../uikit/ui-button";

const PLAYERS_COUNT = 2;

export function Game() {
  const {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
    winnerSymbol,
  } = useGameState(PLAYERS_COUNT);

  const playersList = PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
    <PlayerInfo
      key={player.id}
      avatar={player.avatar}
      isRight={index % 2 === 1}
      name={player.name}
      rating={player.rating}
      seconds={60}
      symbol={player.symbol}
    />
  ));

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  console.log(winnerPlayer?.name);
  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode="1 мин на ход" />
        }
        playersList={playersList}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={() => {
              handleCellClick(index);
            }}
            symbol={cell}
          />
        ))}
        actions={
          <>
            <UiButton size="md" variant="primary">
              Ничья
            </UiButton>
            <UiButton size="md" variant="outline">
              Сдаться
            </UiButton>
          </>
        }
      />
      <GameOverModal players={playersList} winnerName={winnerPlayer?.name} />
    </>
  );
}
