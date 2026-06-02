import {
  BrainCircuit,
  ChevronDown,
  Moon,
  Sun,
  Trophy,
  UserRound,
} from "lucide-react";

export const Header = () => {
  return (
    <header className="flex h-[90px] items-center justify-between rounded-[22px] border border-slate-200 bg-white px-6 shadow-sm">
      <div className="flex items-center gap-5">
        <div className="flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <BrainCircuit size={34} strokeWidth={2.2} />
        </div>

        <div>
          <h1 className="text-[30px] font-black leading-none tracking-[-0.04em] text-slate-950">
            Math Speed
          </h1>

          <p className="mt-2 text-[15px] font-medium tracking-[0.04em] text-slate-500">
            Тренируй быстрый счёт и реакцию
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-[58px] items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6">
          <Trophy
            size={26}
            className="fill-amber-400 text-amber-400"
            strokeWidth={2.2}
          />

          <div>
            <p className="text-[13px] font-semibold leading-none text-slate-500">
              Рекорд
            </p>

            <p className="mt-2 text-[20px] font-black leading-none text-slate-950">
              9 / 10
            </p>
          </div>
        </div>

        <button className="flex h-[58px] items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 transition hover:border-blue-200 hover:bg-blue-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
            <UserRound size={25} strokeWidth={2.4} />
          </div>

          <span className="text-[17px] font-bold text-slate-900">Игрок</span>

          <ChevronDown size={20} className="text-slate-600" strokeWidth={2.2} />
        </button>

        <button className="flex h-[58px] items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 transition hover:border-blue-200 hover:bg-blue-50">
          <Sun
            size={26}
            className="fill-amber-400 text-amber-400"
            strokeWidth={2.2}
          />

          <span className="relative h-7 w-14 rounded-full bg-blue-600 shadow-inner">
            <span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm" />
          </span>

          <Moon
            size={24}
            className="fill-slate-600 text-slate-600"
            strokeWidth={2.2}
          />
        </button>
      </div>
    </header>
  );
};
