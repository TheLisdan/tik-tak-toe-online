import Image from "next/image";
import { GameSymbol } from "./game-symbol";
import { clsx } from "clsx";

export function PlayerInfo({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  isTimerRunning,
  seconds,
}) {
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.floor(seconds % 60)).padStart(2, "0");

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger && "text-orange-600";
    }

    return "text-slate-200";
  };

  return (
    <div className="flex items-center gap-3">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="flex gap-2 items-center text-start text-teal-600 w-44">
          <Image
            src={avatar}
            alt="avatar"
            className="rounded-3xl"
            width={48}
            height={48}
            unoptimized
          />
          <div className="overflow-hidden">
            <div className="text-lg truncate">{name}</div>
            <div className="text-xs text-slate-400">Рейтинг: {rating}</div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full shadow absolute -left-1 -top-1 bg-white flex justify-center items-center">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "text-lg font-semibold leading-tight w-[60px]",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
