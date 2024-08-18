import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";
import logoSrc from "./logo.svg";
import avatarSrc from "../game-new/ui/images/avatar-1.png";
import Image from "next/image";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className="w-44" variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="flex gap-2 ml-auto items-center text-start text-teal-600">
        <div className="flex gap-2 items-center text-start text-teal-600">
          <Image
            src={avatarSrc}
            alt="avatar"
            className="rounded-3xl"
            width={48}
            height={48}
            unoptimized
          />
          <div className="overflow-hidden">
            <div className="text-lg truncate">Lisdan</div>
            <div className="text-xs text-slate-400">Рейтинг: 1337</div>
          </div>
        </div>
        <ArrowDownIcon />
      </button>
    </header>
  );
}
