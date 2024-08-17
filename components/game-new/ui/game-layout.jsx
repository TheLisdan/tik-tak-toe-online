export function GameLayout({ backLink, title, gameInfo, playersList }) {
  return (
    <div>
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div className="mt-4 shadow-md rounded-2xl bg-white px-8 py-4 grid grid-cols-2 gap-3">
        {playersList}
      </div>
    </div>
  );
}
