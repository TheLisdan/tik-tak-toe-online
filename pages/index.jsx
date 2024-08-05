import { useState } from "react";
import { Header } from "../components/header";
import { GameField, GameInfo, GameTitle } from "../components/game";

export default function HomePage() {
  const [playersCount] = useState(2);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo className="mt-4" playersCount={playersCount} />
        <GameField className="mt-6" playersCount={playersCount} />
      </main>
    </div>
  );
}
