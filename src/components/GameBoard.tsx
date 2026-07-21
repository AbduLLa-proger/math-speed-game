import { Clock3 } from "lucide-react";

const IS_NUMBER = /^-?\d*$/;

interface IGameBoard {
  isDarkMode: boolean;
  gameType?: string;
  score?: number;
  correctAnswers?: number;
  mistakes?: number;
  totalAttempts?: number;
  completedRounds?: number;
  previousNumber?: number;
  currentNumber?: number;
  round?: number;
  totalRounds: number;
  finalUserAnswer?: number | null;
  finalCorrectAnswer?: number | null;
  onPlayAgain?: () => void;
  onBackToSettings?: () => void;
  isGameStarted?: boolean;
  userAnswer?: string;
  onAnswerChange?: (value: string) => void;
  onSubmitAnswer?: () => void;
  answerStatus?: string;
  feedbackMessage?: string;
  isGameOver?: boolean;
}

export const GameBoard = ({
  isDarkMode,
  gameType,
  score,
  correctAnswers,
  mistakes,
  totalAttempts,
  completedRounds,
  finalUserAnswer,
  finalCorrectAnswer,
  previousNumber,
  currentNumber,
  round,
  totalRounds,
  isGameStarted,
  userAnswer,
  onPlayAgain,
  onBackToSettings,
  onAnswerChange,
  onSubmitAnswer,
  answerStatus,
  feedbackMessage,
  isGameOver,
}: IGameBoard) => {
  return (
    <section
      className={`min-h-0 h-full overflow-y-auto rounded-[24px] border p-7 shadow-sm flex flex-col justify-between ${
        isDarkMode
          ? "border-slate-700 bg-slate-900"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mb-7 flex items-start justify-between">
        <div>
          <h2
            className={`text-[26px] font-black leading-none ${isDarkMode ? "text-white" : "text-slate-950"}`}
          >
            Раунд{" "}
            <span
              className={`ml-3 ${isDarkMode ? "text-white" : "text-slate-950"}`}
            >
              {round} / {totalRounds}
            </span>
          </h2>

          <p
            className={`mt-4 text-[16px] font-medium ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
          >
            Определи, на сколько изменилось число
          </p>
        </div>

        <div
          className={`px-5 flex h-[70px] items-center p-inline gap-4 rounded-[18px] ${isDarkMode ? "bg-slate-800" : "bg-blue-100"} text-blue-600`}
        >
          <Clock3 size={30} strokeWidth={2.4} />

          <span
            className={`text-[30px] font-black leading-none ${isDarkMode ? "text-white" : "text-slate-950"}`}
          >
            00:42
          </span>
        </div>
      </div>

      <div
        className={`flex h-[285px] flex-col items-center justify-center rounded-[20px] ${isDarkMode ? "bg-slate-800" : "bg-slate-50"}`}
      >
        <p
          className={`mt-8 text-[118px] font-black leading-none ${isDarkMode ? "text-white" : "text-slate-950"}`}
        >
          {isGameStarted ? currentNumber : 0}
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-5">
        <NumberCard
          label="Было"
          value={String(previousNumber)}
          isDarkMode={isDarkMode}
        />
        <NumberCard
          label="Стало"
          value={String(currentNumber)}
          isDarkMode={isDarkMode}
        />
      </div>

      <div className="mt-7">
        <label
          htmlFor="answer"
          className={`mb-4 block text-[18px] font-extrabold ${isDarkMode ? "text-white" : "text-slate-950"}`}
        >
          На сколько изменилось число?
        </label>

        <input
          id="answer"
          type="number"
          inputMode="numeric"
          value={userAnswer}
          disabled={!isGameStarted}
          placeholder={isGameStarted ? `Например -8` : "Сначала начни игру"}
          onChange={(event) => {
            const value = event.target.value;

            if (IS_NUMBER.test(value)) onAnswerChange?.(value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") onSubmitAnswer?.();
          }}
          className={`h-[78px] w-full rounded-[16px] border-2 focus:outline-none focus:ring-0 focus:border-transparent ${isDarkMode ? "border-blue-600 bg-slate-800 text-white placeholder:text-slate-500" : "border-blue-600 bg-white text-slate-950 placeholder:text-slate-300"} px-6 text-[26px] font-semibold outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100`}
        />

        {feedbackMessage && (
          <p
            className={`mt-3 text-[15px] font-bold ${
              answerStatus === "incorrect"
                ? "text-red-500"
                : answerStatus === "correct"
                  ? "text-green-500"
                  : isDarkMode
                    ? "text-slate-300"
                    : "text-slate-600"
            }`}
          >
            {feedbackMessage}
          </p>
        )}
      </div>
    </section>
  );
};

type NumberCardProps = {
  label: string;
  value: string;
  isDarkMode: boolean;
};

const NumberCard = ({ label, value, isDarkMode }: NumberCardProps) => {
  return (
    <div
      className={`flex h-[140px] flex-col items-center justify-center rounded-[18px] border ${isDarkMode ? "bg-slate-800 text-white border-slate-600" : "bg-white text-slate-950 border-slate-200"}`}
    >
      <p
        className={`text-[16px] font-extrabold ${isDarkMode ? "text-white" : "text-slate-950"}`}
      >
        {label}
      </p>

      <p
        className={`mt-4 text-[58px] font-black leading-none tracking-[-0.05em] ${isDarkMode ? "text-white" : "text-slate-950"}`}
      >
        {value}
      </p>
    </div>
  );
};
