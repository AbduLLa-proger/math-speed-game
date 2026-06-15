import {
  BrainCircuit,
  ChevronDown,
  Moon,
  Sun,
  Trophy,
  UserRound,
} from "lucide-react";

type HeaderProps = {
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

export const Header = ({ isDarkMode, onToggleTheme }: HeaderProps) => {
  return (
    <header
      className={`flex h-[10%] items-center justify-between rounded-[22px] border px-6 shadow-sm transition ${isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"} bg-black`}
    >
      <div className="flex items-center gap-5">
        <div className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <BrainCircuit size={34} strokeWidth={2.2} />
        </div>

        <div>
          <h1
            className={`text-[30px] font-black leading-none tracking-[-0.04em] ${isDarkMode ? "text-white" : "text-slate-950"}`}
          >
            Math Speed
          </h1>

          <p
            className={`mt-2 text-[15px] font-medium tracking-[0.04em] ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
          >
            Тренируй быстрый счёт и реакцию
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div
          className={`flex h-[58px] items-center gap-4 rounded-2xl border px-6 ${
            isDarkMode
              ? "border-slate-700 bg-slate-800"
              : "border-slate-200 bg-white"
          }`}
        >
          <Trophy
            size={26}
            className="fill-amber-400 text-amber-400"
            strokeWidth={2.2}
          />

          <div>
            <p
              className={`text-[13px] font-semibold leading-none ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Рекорд
            </p>

            <p
              className={`mt-2 text-[20px] font-black leading-none ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}
            >
              9 / 10
            </p>
          </div>
        </div>

        <button
          type="button"
          className={`flex h-[58px] items-center gap-4 rounded-2xl border px-5 transition ${
            isDarkMode
              ? "border-slate-700 bg-slate-800 hover:bg-slate-700"
              : "border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50"
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
            <UserRound size={25} strokeWidth={2.4} />
          </div>

          <span
            className={`text-[17px] font-bold ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Игрок
          </span>

          <ChevronDown
            size={20}
            className={isDarkMode ? "text-slate-300" : "text-slate-600"}
            strokeWidth={2.2}
          />
        </button>

        <button
          type="button"
          onClick={onToggleTheme}
          className={`flex h-[58px] items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 transition hover:border-blue-200 hover:bg-blue-50 transition ${isDarkMode ? "border-slate-700 bg-slate-800 hover:bg-slate-700" : "border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50"}`}
        >
          <Sun
            size={26}
            className={
              isDarkMode ? "text-slate-500" : "fill-amber-400 text-amber-400"
            }
            strokeWidth={2.2}
          />

          <span
            className={`relative h-7 w-14 rounded-full transition ${isDarkMode ? "bg-slate-700" : "bg-blue-600"}`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition ${isDarkMode ? "left-1" : "right-1"} `}
            />
          </span>

          <Moon
            size={24}
            className={
              isDarkMode
                ? "fill-slate-400 text-slate-400"
                : "fill-slate-600 text-slate-600"
            }
            strokeWidth={2.2}
          />
        </button>
      </div>
    </header>
  );
};
