import { RotateCcw, Settings2, Trophy } from "lucide-react";
import type { GameType } from "./Sidebar";

type GameResultProps = {
  isDarkMode: boolean;
  gameType: GameType;
  score: number;
  correctAnswers: number;
  mistakes: number;
  totalAttempts: number;
  completedRounds: number;
  totalRounds: number;
  finalUserAnswer: number | null;
  finalCorrectAnswer: number | null;
  onPlayAgain: () => void;
  onBackToSettings: () => void;
};

export const GameResult = ({
  isDarkMode,
  gameType,
  score,
  correctAnswers,
  mistakes,
  totalAttempts,
  completedRounds,
  totalRounds,
  finalUserAnswer,
  finalCorrectAnswer,
  onPlayAgain,
  onBackToSettings,
}: GameResultProps) => {
  const accuracy =
    totalAttempts === 0
      ? 0
      : Math.round((correctAnswers / totalAttempts) * 100);

  const isSurvival = gameType === "survival";

  return (
    <section
      className={`custom-scrollbar flex h-full min-h-0 flex-col overflow-y-auto rounded-[24px] border p-7 shadow-sm ${
        isDarkMode
          ? "scrollbar-dark border-slate-700 bg-slate-900"
          : "scrollbar-light border-slate-200 bg-white"
      }`}
    >
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">
          <Trophy
            size={52}
            strokeWidth={2.2}
            className="fill-amber-400 text-amber-400"
          />
        </div>

        <h2
          className={`mt-6 text-[34px] font-black ${
            isDarkMode ? "text-white" : "text-slate-950"
          }`}
        >
          {isSurvival && mistakes > 0 ? "Игра окончена" : "Игра завершена"}
        </h2>

        <p
          className={`mt-3 text-[16px] ${
            isDarkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {isSurvival
            ? "Результат режима до первой ошибки"
            : "Результат тренировочного режима"}
        </p>

        <div
          className={`mt-7 rounded-[22px] px-12 py-7 ${
            isDarkMode ? "bg-slate-800" : "bg-blue-50"
          }`}
        >
          <p
            className={`text-[15px] font-semibold ${
              isDarkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Результат
          </p>

          <p
            className={`mt-2 text-[58px] font-black leading-none ${
              isDarkMode ? "text-white" : "text-slate-950"
            }`}
          >
            {correctAnswers} / {totalRounds}
          </p>
        </div>

        <div className="mt-7 grid w-full grid-cols-2 gap-4 xl:grid-cols-4">
          <ResultCard
            label="Очки"
            value={String(score)}
            isDarkMode={isDarkMode}
          />

          <ResultCard
            label="Верно"
            value={String(correctAnswers)}
            isDarkMode={isDarkMode}
          />

          <ResultCard
            label="Ошибки"
            value={String(mistakes)}
            isDarkMode={isDarkMode}
          />

          <ResultCard
            label="Точность"
            value={`${accuracy}%`}
            isDarkMode={isDarkMode}
          />
        </div>

        {isSurvival && mistakes > 0 && (
          <div
            className={`mt-6 w-full rounded-[18px] border p-5 ${
              isDarkMode
                ? "border-red-900 bg-red-950/30"
                : "border-red-200 bg-red-50"
            }`}
          >
            <p className="text-[16px] font-extrabold text-red-500">
              Пройдено раундов: {completedRounds}
            </p>

            <div className="mt-4 flex justify-center gap-8">
              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Твой ответ
                </p>

                <p
                  className={`mt-1 text-2xl font-black ${
                    isDarkMode ? "text-white" : "text-slate-950"
                  }`}
                >
                  {finalUserAnswer}
                </p>
              </div>

              <div>
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Правильный ответ
                </p>

                <p className="mt-1 text-2xl font-black text-green-500">
                  {finalCorrectAnswer}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={onPlayAgain}
          className="flex h-[58px] cursor-pointer items-center justify-center gap-3 rounded-[16px] bg-blue-600 font-extrabold text-white transition hover:bg-blue-700"
        >
          <RotateCcw size={20} />
          Играть снова
        </button>

        <button
          type="button"
          onClick={onBackToSettings}
          className={`flex h-[58px] cursor-pointer items-center justify-center gap-3 rounded-[16px] border font-extrabold transition ${
            isDarkMode
              ? "border-slate-600 bg-slate-800 text-white hover:bg-slate-700"
              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
          }`}
        >
          <Settings2 size={20} />
          Изменить настройки
        </button>
      </div>
    </section>
  );
};

type ResultCardProps = {
  label: string;
  value: string;
  isDarkMode: boolean;
};

const ResultCard = ({ label, value, isDarkMode }: ResultCardProps) => {
  return (
    <div
      className={`rounded-[18px] border p-5 text-center ${
        isDarkMode
          ? "border-slate-700 bg-slate-800"
          : "border-slate-200 bg-white"
      }`}
    >
      <p
        className={`text-sm font-semibold ${
          isDarkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {label}
      </p>

      <p
        className={`mt-2 text-[28px] font-black ${
          isDarkMode ? "text-white" : "text-slate-950"
        }`}
      >
        {value}
      </p>
    </div>
  );
};
