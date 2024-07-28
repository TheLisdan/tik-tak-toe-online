export function ResetButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-2xl mb-4 bg-slate-200 p-2 rounded-md"
    >
      Начать заново
    </button>
  );
}
