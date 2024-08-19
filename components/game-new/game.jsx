import { PLAYERS } from "./constants";
import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameTitle } from "./ui/game-title";
import { GameInfo } from "./ui/game-info";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameCell } from "./ui/game-cell";
import { GameOverModal } from "./ui/game-over-modal";
import { UiButton } from "../uikit/ui-button";
import {
  initGameState,
  gameStateReducer,
  GAME_STATE_ACTION,
} from "./model/game-state-reducer";
import { useReducer } from "react";
import { getNextMove } from "./model/get-next-move";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { computeWinner } from "./model/compute-winner";

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT },
    initGameState,
  );

  const winnerSequence = computeWinner(gameState);
  const nextMove = getNextMove(gameState);

  const winnerSymbol = computeWinnerSymbol(gameState, {
    nextMove,
    winnerSequence,
  });

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
  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame
            playersCount={PLAYERS_COUNT}
            timeMode="1 мин на ход"
          />
        }
        playersList={playersList}
        gameMoveInfo={
          <GameMoveInfo
            currentMove={gameState.currentMove}
            nextMove={nextMove}
          />
        }
        gameCells={gameState.cells.map((cell, index) => (
          <GameCell
            key={index}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={() => {
              dispatch({
                type: GAME_STATE_ACTION.CELL_CLICK,
                index,
              });
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
