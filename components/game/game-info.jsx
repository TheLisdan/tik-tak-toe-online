import clsx from "clsx";
import { Profile } from "../profile";
import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "shadow-md rounded-2xl bg-white px-8 py-4 flex justify-between",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full shadow absolute -left-1 -top-1 bg-white flex justify-center items-center">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="text-lg font-semibold text-slate-900">01:08</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-lg font-semibold text-orange-600">00:08</div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="relative">
          <Profile className="w-44" />
          <div className="w-5 h-5 rounded-full shadow absolute -left-1 -top-1 bg-white flex justify-center items-center">
            <ZeroIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
