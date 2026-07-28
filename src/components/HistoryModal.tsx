import { CheckCircle2, X, XCircle } from "lucide-react";
import type { GameHistoryItem } from "./StatsPanel";

type HistoryModalProps = {
  isDarkMode: boolean;
  history: GameHistoryItem[];
  onClose: () => void;
};

export const HistoryModal = ({
  isDarkMode,
  history,
  onClose,
}: HistoryModalProps) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="История ответов"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`custom-scrollbar max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-[24px] border p-6 shadow-2xl ${
          isDarkMode
            ? "scrollbar-dark border-slate-700 bg-slate-900"
            : "scrollbar-light border-slate-200 bg-white"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2
              className={`text-[26px] font-black ${
                isDarkMode ? "text-white" : "text-slate-950"
              }`}
            >
              История ответов
            </h2>

            <p
              className={`mt-2 text-sm ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Всего попыток: {history.length}
            </p>
          </div>

          <button
            type="button"
            aria-label="Закрыть историю"
            onClick={onClose}
            className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full transition ${
              isDarkMode
                ? "bg-slate-800 text-white hover:bg-slate-700"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <X size={22} />
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {history.length === 0 ? (
            <p
              className={`rounded-[16px] border p-6 text-center ${
                isDarkMode
                  ? "border-slate-700 text-slate-400"
                  : "border-slate-200 text-slate-500"
              }`}
            >
              Ответов пока нет
            </p>
          ) : (
            history.map((item, index) => {
              const correctAnswer = item.to - item.from;

              return (
                <div
                  key={`${item.from}-${item.to}-${index}`}
                  className={`grid gap-4 rounded-[18px] border p-4 sm:grid-cols-[70px_1fr_1fr_1fr_auto] sm:items-center ${
                    isDarkMode
                      ? "border-slate-700 bg-slate-800"
                      : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <p
                    className={`font-bold ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    #{history.length - index}
                  </p>

                  <div>
                    <p className="text-xs text-slate-500">Изменение</p>
                    <p
                      className={`mt-1 font-black ${
                        isDarkMode ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {item.from} → {item.to}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Твой ответ</p>
                    <p
                      className={`mt-1 font-black ${
                        item.correct ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.answer > 0 ? "+" : ""}
                      {item.answer}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">Правильный</p>
                    <p
                      className={`mt-1 font-black ${
                        isDarkMode ? "text-white" : "text-slate-950"
                      }`}
                    >
                      {correctAnswer > 0 ? "+" : ""}
                      {correctAnswer}
                    </p>
                  </div>

                  <div
                    className={`flex items-center gap-2 font-extrabold ${
                      item.correct ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.correct ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      <XCircle size={20} />
                    )}

                    {item.correct ? "Верно" : "Ошибка"}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
