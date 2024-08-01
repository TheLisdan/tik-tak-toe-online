import avatarSrc from "./avatar.png";
import Image from "next/image";
import clsx from "clsx";

export function Profile({ className }) {
  return (
    <div
      className={clsx(
        "flex gap-2 items-center text-start text-teal-600",
        className,
      )}
    >
      <Image
        src={avatarSrc}
        alt="avatar"
        className="rounded-3xl"
        width={48}
        height={48}
        unoptimized
      />
      <div>
        <div className="text-lg leading-tight">Lisdan</div>
        <div className="text-xs leading-tight text-slate-400">
          Рейтинг: 1337
        </div>
      </div>
    </div>
  );
}
