import { Minus, Play, Plus, Shuffle, TrendingUp } from "lucide-react";
import { type TSidebarProps } from "../types/game";
import { DIFFICULTIES, MODES } from "../utils/game";

export const Sidebar = ({
  isDarkMode,
  isSettingsLocked,
  selectedDifficulty,
  selectedMode,
  selectedGameType,
  roundsMode,
  selectedRounds,
  onDifficultyChange,
  onModeChange,
  onGameTypeChange,
  onRoundsModeChange,
  onSelectedRoundsChange,
  onStartGame,
}: TSidebarProps) => {
  return (
    <aside
      className={`custom-scrollbar min-h-0 h-full overflow-y-auto rounded-[24px] border p-5 shadow-sm transition ${
        isDarkMode
          ? "border-slate-700 bg-slate-900"
          : "border-slate-200 bg-white"
      }`}
    >
      <section>
        <div className="flex items-start gap-3">
          <TrendingUp
            size={22}
            className="mt-1 text-blue-500"
            strokeWidth={2.2}
          />

          <div>
            <h2
              className={`text-[18px] font-extrabold ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}
            >
              Выбор сложности
            </h2>

            <p
              className={`mt-1 text-[14px] leading-6 ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Выберите уровень сложности
              <br />
              для игры
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button
            key={DIFFICULTIES[0].key}
            type="button"
            onClick={() => onDifficultyChange(DIFFICULTIES[0].key)}
            disabled={isSettingsLocked}
            className={`disabled-element disabled:opacity-50 w-full cursor-pointer rounded-[18px] border px-4 py-4 text-left transition ${
              selectedDifficulty === DIFFICULTIES[0].key
                ? isDarkMode
                  ? "border-blue-500 bg-blue-950/40"
                  : "border-blue-400 bg-blue-50/50"
                : isDarkMode
                  ? "border-slate-700 bg-slate-800 hover:border-blue-500 hover:bg-slate-800/80 disabled-element"
                  : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50 disabled-element"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`h-5 w-5 rounded-full ${DIFFICULTIES[0].dotClassName}`}
              />

              <div>
                <p
                  className={`text-[17px] font-extrabold ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  }`}
                >
                  {DIFFICULTIES[0].title}
                </p>

                <p
                  className={`mt-1 text-[14px] ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {DIFFICULTIES[0].description}
                </p>
              </div>
            </div>
          </button>

          <button
            key={DIFFICULTIES[1].key}
            type="button"
            onClick={() => onDifficultyChange(DIFFICULTIES[1].key)}
            disabled={isSettingsLocked}
            className={`disabled-element disabled:opacity-50 w-full cursor-pointer rounded-[18px] border px-4 py-4 text-left transition ${
              selectedDifficulty === DIFFICULTIES[1].key
                ? isDarkMode
                  ? "border-blue-500 bg-blue-950/40"
                  : "border-blue-400 bg-blue-50/50"
                : isDarkMode
                  ? "border-slate-700 bg-slate-800 hover:border-blue-500 hover:bg-slate-800/80"
                  : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`h-5 w-5 rounded-full ${DIFFICULTIES[1].dotClassName}`}
              />

              <div>
                <p
                  className={`text-[17px] font-extrabold ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  }`}
                >
                  {DIFFICULTIES[1].title}
                </p>

                <p
                  className={`mt-1 text-[14px] ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {DIFFICULTIES[1].description}
                </p>
              </div>
            </div>
          </button>

          <button
            key={DIFFICULTIES[2].key}
            type="button"
            onClick={() => onDifficultyChange(DIFFICULTIES[2].key)}
            disabled={isSettingsLocked}
            className={`disabled-element disabled:opacity-50 w-full cursor-pointer rounded-[18px] border px-4 py-4 text-left transition ${
              selectedDifficulty === DIFFICULTIES[2].key
                ? isDarkMode
                  ? "border-blue-500 bg-blue-950/40"
                  : "border-blue-400 bg-blue-50/50"
                : isDarkMode
                  ? "border-slate-700 bg-slate-800 hover:border-blue-500 hover:bg-slate-800/80"
                  : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`h-5 w-5 rounded-full ${DIFFICULTIES[2].dotClassName}`}
              />

              <div>
                <p
                  className={`text-[17px] font-extrabold ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  }`}
                >
                  {DIFFICULTIES[2].title}
                </p>

                <p
                  className={`mt-1 text-[14px] ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {DIFFICULTIES[2].description}
                </p>
              </div>
            </div>
          </button>

          <button
            key={DIFFICULTIES[3].key}
            type="button"
            onClick={() => onDifficultyChange(DIFFICULTIES[3].key)}
            disabled={isSettingsLocked}
            className={`disabled-element disabled:opacity-50 w-full cursor-pointer rounded-[18px] border px-4 py-4 text-left transition ${
              selectedDifficulty === DIFFICULTIES[3].key
                ? isDarkMode
                  ? "border-blue-500 bg-blue-950/40"
                  : "border-blue-400 bg-blue-50/50"
                : isDarkMode
                  ? "border-slate-700 bg-slate-800 hover:border-blue-500 hover:bg-slate-800/80"
                  : "border-slate-200 bg-white hover:border-blue-200 hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`h-5 w-5 rounded-full ${DIFFICULTIES[3].dotClassName}`}
              />

              <div>
                <p
                  className={`text-[17px] font-extrabold ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  }`}
                >
                  {DIFFICULTIES[3].title}
                </p>

                <p
                  className={`mt-1 text-[14px] ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {DIFFICULTIES[3].description}
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
            <h2
              className={`text-[18px] font-extrabold ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}
            >
              Выбор режима
            </h2>

            <p
              className={`mt-1 text-[14px] leading-6 ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Выберите режим игры
            </p>
          </div>
        </div>

        <div
          className={`mt-5 rounded-[18px] p-3 transition ${
            isDarkMode ? "bg-slate-800" : "bg-slate-50"
          }`}
        >
          <div className="space-y-2">
            <button
              key={MODES[0].key}
              type="button"
              onClick={() => onModeChange(MODES[0].key)}
              disabled={isSettingsLocked}
              className={`disabled-element disabled:opacity-50 flex w-full cursor-pointer items-center gap-4 rounded-[14px] px-4 py-4 text-left transition ${
                selectedMode === MODES[0].key
                  ? isDarkMode
                    ? "bg-slate-900 shadow-sm ring-1 ring-blue-500"
                    : "bg-white shadow-sm ring-1 ring-blue-200"
                  : isDarkMode
                    ? "hover:bg-slate-700/70"
                    : "hover:bg-white/70"
              }`}
            >
              <Plus
                size={22}
                className={MODES[0].iconClassName}
                strokeWidth={2.4}
              />

              <span
                className={`text-[16px] font-medium ${
                  isDarkMode ? "text-white" : "text-slate-700"
                }`}
              >
                {MODES[0].title}
              </span>
            </button>

            <button
              key={MODES[1].key}
              type="button"
              onClick={() => onModeChange(MODES[1].key)}
              disabled={isSettingsLocked}
              className={`disabled-element disabled:opacity-50 flex w-full cursor-pointer items-center gap-4 rounded-[14px] px-4 py-4 text-left transition ${
                selectedMode === MODES[1].key
                  ? isDarkMode
                    ? "bg-slate-900 shadow-sm ring-1 ring-blue-500"
                    : "bg-white shadow-sm ring-1 ring-blue-200"
                  : isDarkMode
                    ? "hover:bg-slate-700/70"
                    : "hover:bg-white/70"
              }`}
            >
              <Minus
                size={22}
                className={MODES[1].iconClassName}
                strokeWidth={2.4}
              />

              <span
                className={`text-[16px] font-medium ${
                  isDarkMode ? "text-white" : "text-slate-700"
                }`}
              >
                {MODES[1].title}
              </span>
            </button>

            <button
              key={MODES[2].key}
              type="button"
              onClick={() => onModeChange(MODES[2].key)}
              disabled={isSettingsLocked}
              className={`disabled-element disabled:opacity-50 flex w-full cursor-pointer items-center gap-4 rounded-[14px] px-4 py-4 text-left transition ${
                selectedMode === MODES[2].key
                  ? isDarkMode
                    ? "bg-slate-900 shadow-sm ring-1 ring-blue-500"
                    : "bg-white shadow-sm ring-1 ring-blue-200"
                  : isDarkMode
                    ? "hover:bg-slate-700/70"
                    : "hover:bg-white/70"
              }`}
            >
              <Shuffle
                size={22}
                className={MODES[2].iconClassName}
                strokeWidth={2.4}
              />

              <span
                className={`text-[16px] font-medium ${
                  isDarkMode ? "text-white" : "text-slate-700"
                }`}
              >
                {MODES[2].title}
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div>
          <h2
            className={`text-[18px] font-extrabold ${
              isDarkMode ? "text-white" : "text-slate-950"
            }`}
          >
            Тип игры
          </h2>

          <p
            className={`mt-1 text-[14px] leading-6 ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Выберите правила завершения игры
          </p>
        </div>

        <div className="mt-5 space-y-3">
          <button
            type="button"
            onClick={() => onGameTypeChange("practice")}
            disabled={isSettingsLocked}
            className={`disabled-element disabled:opacity-50 w-full cursor-pointer rounded-[16px] border p-4 text-left transition ${
              selectedGameType === "practice"
                ? isDarkMode
                  ? "border-blue-500 bg-blue-950/40"
                  : "border-blue-400 bg-blue-50"
                : isDarkMode
                  ? "border-slate-700 bg-slate-800 hover:border-blue-500"
                  : "border-slate-200 bg-white hover:border-blue-200"
            }`}
          >
            <p
              className={`font-extrabold ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}
            >
              Тренировка
            </p>

            <p
              className={`mt-1 text-[13px] ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Ошибки разрешены, можно попробовать ещё раз
            </p>
          </button>

          <button
            type="button"
            onClick={() => onGameTypeChange("survival")}
            disabled={isSettingsLocked}
            className={`disabled-element disabled:opacity-50 w-full cursor-pointer rounded-[16px] border p-4 text-left transition ${
              selectedGameType === "survival"
                ? isDarkMode
                  ? "border-red-500 bg-red-950/30"
                  : "border-red-400 bg-red-50"
                : isDarkMode
                  ? "border-slate-700 bg-slate-800 hover:border-red-500"
                  : "border-slate-200 bg-white hover:border-red-200"
            }`}
          >
            <p
              className={`font-extrabold ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}
            >
              До первой ошибки
            </p>

            <p
              className={`mt-1 text-[13px] ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Первый неправильный ответ завершает игру
            </p>
          </button>
        </div>
      </section>

      <section className="mt-8">
        <div>
          <h2
            className={`text-[18px] font-extrabold ${
              isDarkMode ? "text-white" : "text-slate-950"
            }`}
          >
            Количество раундов
          </h2>

          <p
            className={`mt-1 text-[14px] leading-6 ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Выберите количество или играйте без ограничений
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <button
            type="button"
            disabled={isSettingsLocked}
            onClick={() => onRoundsModeChange("fixed")}
            className={`disabled-element cursor-pointer rounded-[14px] border p-3 font-bold transition disabled:opacity-50 ${
              roundsMode === "fixed"
                ? isDarkMode
                  ? "border-blue-500 bg-blue-950/40 text-white"
                  : "border-blue-400 bg-blue-50 text-blue-700"
                : isDarkMode
                  ? "border-slate-700 bg-slate-800 text-slate-300"
                  : "border-slate-200 bg-white text-slate-700"
            }`}
          >
            Раунды
          </button>

          <button
            type="button"
            disabled={isSettingsLocked}
            onClick={() => onRoundsModeChange("infinite")}
            className={`disabled-element cursor-pointer rounded-[14px] border p-3 font-bold transition disabled:opacity-50 ${
              roundsMode === "infinite"
                ? isDarkMode
                  ? "border-violet-500 bg-violet-950/40 text-white"
                  : "border-violet-400 bg-violet-50 text-violet-700"
                : isDarkMode
                  ? "border-slate-700 bg-slate-800 text-slate-300"
                  : "border-slate-200 bg-white text-slate-700"
            }`}
          >
            ∞ Бесконечно
          </button>
        </div>

        {roundsMode === "fixed" && (
          <>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {[10, 20, 50, 100].map((rounds) => (
                <button
                  key={rounds}
                  type="button"
                  disabled={isSettingsLocked}
                  onClick={() => onSelectedRoundsChange(rounds)}
                  className={`disabled-element h-11 cursor-pointer rounded-[12px] border font-bold transition disabled:opacity-50 ${
                    selectedRounds === rounds
                      ? "border-blue-500 bg-blue-600 text-white"
                      : isDarkMode
                        ? "border-slate-700 bg-slate-800 text-white"
                        : "border-slate-200 bg-white text-slate-700"
                  }`}
                >
                  {rounds}
                </button>
              ))}
            </div>

            <input
              type="number"
              min={10}
              disabled={isSettingsLocked}
              value={selectedRounds || ""}
              onChange={(event) =>
                onSelectedRoundsChange(Number(event.target.value))
              }
              onBlur={() => {
                if (selectedRounds < 10) {
                  onSelectedRoundsChange(10);
                }
              }}
              placeholder="Минимум 10"
              className={`mt-3 h-12 w-full rounded-[12px] border px-4 font-semibold outline-none transition focus:border-blue-500 disabled:opacity-50 ${
                isDarkMode
                  ? "border-slate-700 bg-slate-800 text-white"
                  : "border-slate-200 bg-white text-slate-950"
              }`}
            />
          </>
        )}
      </section>

      <button
        type="button"
        onClick={onStartGame}
        disabled={
          isSettingsLocked || (roundsMode === "fixed" && selectedRounds < 10)
        }
        className="mt-6 flex h-[64px] w-full items-center justify-center gap-3
  rounded-[18px] bg-blue-600 text-[17px] font-extrabold text-white
  shadow-lg shadow-blue-600/20 transition
  enabled:cursor-pointer enabled:hover:bg-blue-700
  disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Play size={20} className="fill-white text-white" strokeWidth={2.4} />
        {isSettingsLocked ? "Игра запущена" : "Начать игру"}
      </button>
    </aside>
  );
};
