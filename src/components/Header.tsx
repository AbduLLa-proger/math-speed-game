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
      className={`flex min-h-[90px] flex-col gap-4 rounded-[22px] border p-4 shadow-sm transition md:flex-row md:items-center md:justify-between lg:px-6 ${
        isDarkMode
          ? "border-slate-700 bg-slate-900"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex min-w-0 items-center gap-3 lg:gap-5">
        <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 lg:h-[58px] lg:w-[58px]">
          <BrainCircuit
            size={30}
            strokeWidth={2.2}
            className="lg:h-[34px] lg:w-[34px]"
          />
        </div>

        <div className="min-w-0">
          <h1
            className={`whitespace-nowrap text-[22px] font-black leading-none tracking-[-0.04em] lg:text-[30px] ${
              isDarkMode ? "text-white" : "text-slate-950"
            }`}
          >
            Math Speed
          </h1>

          <p
            className={`mt-2 hidden text-[13px] font-medium tracking-[0.02em] sm:block lg:text-[15px] lg:tracking-[0.04em] ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Тренируй быстрый счёт и реакцию
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
        <div
          className={`flex h-[54px] min-w-[108px] shrink-0 items-center gap-3 rounded-2xl border px-4 lg:h-[58px] lg:min-w-[122px] ${
            isDarkMode
              ? "border-slate-700 bg-slate-800"
              : "border-slate-200 bg-white"
          }`}
        >
          <Trophy
            size={24}
            className="shrink-0 fill-amber-400 text-amber-400"
            strokeWidth={2.2}
          />

          <div className="whitespace-nowrap">
            <p
              className={`text-[11px] font-semibold leading-none lg:text-[13px] ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Рекорд
            </p>

            <p
              className={`mt-1.5 text-[17px] font-black leading-none lg:text-[20px] ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}
            >
              9 / 10
            </p>
          </div>
        </div>

        <button
          type="button"
          className={`flex h-[54px] shrink-0 cursor-pointer items-center gap-3 rounded-2xl border px-3 transition lg:h-[58px] lg:gap-4 lg:px-5 ${
            isDarkMode
              ? "border-slate-700 bg-slate-800 hover:bg-slate-700"
              : "border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50"
          }`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white lg:h-10 lg:w-10">
            <UserRound size={23} strokeWidth={2.4} />
          </div>

          <span
            className={`hidden text-[15px] font-bold sm:inline lg:text-[17px] ${
              isDarkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Игрок
          </span>

          <ChevronDown
            size={18}
            className={isDarkMode ? "text-slate-300" : "text-slate-600"}
            strokeWidth={2.2}
          />
        </button>

        <button
          type="button"
          aria-label={
            isDarkMode ? "Включить светлую тему" : "Включить тёмную тему"
          }
          onClick={onToggleTheme}
          className={`flex h-[54px] shrink-0 cursor-pointer items-center gap-2 rounded-2xl border px-3 transition lg:h-[58px] lg:gap-4 lg:px-5 ${
            isDarkMode
              ? "border-slate-700 bg-slate-800 hover:bg-slate-700"
              : "border-slate-200 bg-white hover:border-blue-200 hover:bg-blue-50"
          }`}
        >
          <Sun
            size={22}
            className={
              isDarkMode ? "text-slate-500" : "fill-amber-400 text-amber-400"
            }
            strokeWidth={2.2}
          />

          <span
            className={`relative h-7 w-12 rounded-full transition lg:w-14 ${
              isDarkMode ? "bg-slate-700" : "bg-blue-600"
            }`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${
                isDarkMode ? "left-1" : "left-[24px] lg:left-[32px]"
              }`}
            />
          </span>

          <Moon
            size={22}
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
