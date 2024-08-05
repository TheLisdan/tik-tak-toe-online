import avatarSrc from "./avatar.png";
import Image from "next/image";
import clsx from "clsx";

export function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        "flex gap-2 items-center text-start text-teal-600",
        className,
      )}
    >
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
  );
}
