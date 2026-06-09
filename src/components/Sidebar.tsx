import { Minus, Play, Plus, Shuffle, TrendingUp } from "lucide-react";

export type DifficultyKey = "easy" | "medium" | "hard" | "expert";
export type ModeKey = "plus" | "minus" | "mixed";

type SidebarProps = {
  selectedDifficulty: DifficultyKey;
  selectedMode: ModeKey;
  onDifficultyChange: (difficulty: DifficultyKey) => void;
  onModeChange: (mode: ModeKey) => void;
  onStartGame: () => void;
};

const difficulties = [
  {
    key: "easy" as DifficultyKey,
    title: "Легко",
    description: "Числа от -9 до +9",
    dotClassName: "bg-green-500",
  },
  {
    key: "medium" as DifficultyKey,
    title: "Средне",
    description: "Числа от -20 до +20",
    dotClassName: "bg-blue-500",
  },
  {
    key: "hard" as DifficultyKey,
    title: "Сложно",
    description: "Числа от -50 до +50",
    dotClassName: "bg-amber-500",
  },
  {
    key: "expert" as DifficultyKey,
    title: "Эксперт",
    description: "Числа от -100 до +100",
    dotClassName: "bg-red-500",
  },
];

const modes = [
  {
    key: "plus" as ModeKey,
    title: "Только сложение",
    iconClassName: "text-green-500",
  },
  {
    key: "minus" as ModeKey,
    title: "Только вычитание",
    iconClassName: "text-blue-500",
  },
  {
    key: "mixed" as ModeKey,
    title: "Смешанный режим",
    iconClassName: "text-violet-500",
  },
];

export const Sidebar = ({
  selectedDifficulty,
  selectedMode,
  onDifficultyChange,
  onModeChange,
  onStartGame,
}: SidebarProps) => {
  return (
    <aside className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
      <section>
        <div className="flex items-start gap-3">
          <TrendingUp
            size={22}
            className="mt-1 text-blue-500"
            strokeWidth={2.2}
          />

          <div>
            <h2 className="text-[18px] font-extrabold text-slate-950">
              Выбор сложности
            </h2>

            <p className="mt-1 text-[14px] leading-6 text-slate-500">
              Выбери уровень сложности
              <br />
              для игры
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button
            key={difficulties[0].key}
            type="button"
            onClick={() => onDifficultyChange(difficulties[0].key)}
            className={`w-full rounded-[18px] border px-4 py-4 text-left transition cursor-pointer ${
              selectedDifficulty === difficulties[0].key
                ? "border-blue-400 bg-blue-50/50"
                : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`h-5 w-5 rounded-full ${difficulties[0].dotClassName}`}
              />

              <div>
                <p className="text-[17px] font-extrabold text-slate-950">
                  {difficulties[0].title}
                </p>

                <p className="mt-1 text-[14px] text-slate-500">
                  {difficulties[0].description}
                </p>
              </div>
            </div>
          </button>
          <button
            key={difficulties[1].key}
            type="button"
            onClick={() => onDifficultyChange(difficulties[1].key)}
            className={`w-full rounded-[18px] border px-4 py-4 text-left transition cursor-pointer ${
              selectedDifficulty === difficulties[1].key
                ? "border-blue-400 bg-blue-50/50"
                : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`h-5 w-5 rounded-full ${difficulties[1].dotClassName}`}
              />

              <div>
                <p className="text-[17px] font-extrabold text-slate-950">
                  {difficulties[1].title}
                </p>

                <p className="mt-1 text-[14px] text-slate-500">
                  {difficulties[1].description}
                </p>
              </div>
            </div>
          </button>
          <button
            key={difficulties[2].key}
            type="button"
            onClick={() => onDifficultyChange(difficulties[2].key)}
            className={`w-full rounded-[18px] border px-4 py-4 text-left transition cursor-pointer ${
              selectedDifficulty === difficulties[2].key
                ? "border-blue-400 bg-blue-50/50"
                : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`h-5 w-5 rounded-full ${difficulties[2].dotClassName}`}
              />

              <div>
                <p className="text-[17px] font-extrabold text-slate-950">
                  {difficulties[2].title}
                </p>

                <p className="mt-1 text-[14px] text-slate-500">
                  {difficulties[2].description}
                </p>
              </div>
            </div>
          </button>
          <button
            key={difficulties[3].key}
            type="button"
            onClick={() => onDifficultyChange(difficulties[3].key)}
            className={`w-full rounded-[18px] border px-4 py-4 text-left transition cursor-pointer ${
              selectedDifficulty === difficulties[3].key
                ? "border-blue-400 bg-blue-50/50"
                : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`h-5 w-5 rounded-full ${difficulties[3].dotClassName}`}
              />

              <div>
                <p className="text-[17px] font-extrabold text-slate-950">
                  {difficulties[3].title}
                </p>

                <p className="mt-1 text-[14px] text-slate-500">
                  {difficulties[3].description}
                </p>
              </div>
            </div>
          </button>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-start gap-3">
          <Shuffle size={22} className="mt-1 text-blue-500" strokeWidth={2.2} />

          <div>
            <h2 className="text-[18px] font-extrabold text-slate-950">
              Выбор режима
            </h2>

            <p className="mt-1 text-[14px] leading-6 text-slate-500">
              Выбери режим игры
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-[18px] bg-slate-50 p-3">
          <div className="space-y-2">
            <button
              key={modes[0].key}
              type="button"
              onClick={() => onModeChange(modes[0].key)}
              className={`flex w-full items-center gap-4 rounded-[14px] px-4 py-4 text-left transition cursor-pointer ${
                selectedMode === modes[0].key
                  ? "bg-white shadow-sm ring-1 ring-blue-200"
                  : "hover:bg-white/70"
              }`}
            >
              <Plus
                size={22}
                className={modes[0].iconClassName}
                strokeWidth={2.4}
              />

              <span className="text-[16px] font-medium text-slate-700">
                {modes[0].title}
              </span>
            </button>
            <button
              key={modes[1].key}
              type="button"
              onClick={() => onModeChange(modes[1].key)}
              className={`flex w-full items-center gap-4 rounded-[14px] px-4 py-4 text-left transition cursor-pointer ${
                selectedMode === modes[1].key
                  ? "bg-white shadow-sm ring-1 ring-blue-200"
                  : "hover:bg-white/70"
              }`}
            >
              <Minus
                size={22}
                className={modes[1].iconClassName}
                strokeWidth={2.4}
              />

              <span className="text-[16px] font-medium text-slate-700">
                {modes[1].title}
              </span>
            </button>
            <button
              key={modes[2].key}
              type="button"
              onClick={() => onModeChange(modes[2].key)}
              className={`flex w-full items-center gap-4 rounded-[14px] px-4 py-4 text-left transition cursor-pointer ${
                selectedMode === modes[2].key
                  ? "bg-white shadow-sm ring-1 ring-blue-200"
                  : "hover:bg-white/70"
              }`}
            >
              <Shuffle
                size={22}
                className={modes[2].iconClassName}
                strokeWidth={2.4}
              />

              <span className="text-[16px] font-medium text-slate-700">
                {modes[2].title}
              </span>
            </button>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={onStartGame}
        className="cursor-pointer mt-6 flex h-[64px] w-full items-center justify-center gap-3 rounded-[18px] bg-blue-600 text-[17px] font-extrabold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
      >
        <Play size={20} className="fill-white text-white" strokeWidth={2.4} />
        Начать игру
      </button>
    </aside>
  );
};
