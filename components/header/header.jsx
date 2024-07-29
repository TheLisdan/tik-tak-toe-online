import Image from "next/image";
import logoSrc from "./logo.svg";
import avatarSrc from "./avatar.png";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <button className="w-44 px-5 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 transition-colors text-white shadow text-2xl leading-tight">
        Играть
      </button>
      <button className="flex gap-2 ml-auto items-center text-start text-teal-600 hover:text-teal-500 transition-colors">
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

        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.18 12.75a.5.5 0 0 1-.39-.17L3.16 6.96a.5.5 0 0 1 .71-.71L9.18 11.39l5.23-5.23a.5.5 0 0 1 .71.71L9.58 12.58a.5.5 0 0 1-.39.17z"
            fill="currentColor"
          />
        </svg>
      </button>
    </header>
  );
}
