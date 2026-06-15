import {
  CheckCircle2,
  Clock3,
  Flame,
  Star,
  Trophy,
  XCircle,
} from "lucide-react";

const stats = [
  {
    title: "Очки",
    value: "3200",
    icon: Star,
    iconClassName: "fill-blue-600 text-blue-600",
  },
  {
    title: "Серия",
    value: "3",
    icon: Flame,
    iconClassName: "fill-green-500 text-green-500",
  },
  {
    title: "Верно",
    value: "8",
    icon: CheckCircle2,
    iconClassName: "fill-green-500 text-white",
  },
  {
    title: "Ошибки",
    value: "2",
    icon: XCircle,
    iconClassName: "fill-red-500 text-white",
  },
];

const history = [
  {
    from: "0",
    to: "7",
    answer: "+7",
    correct: true,
  },
  {
    from: "7",
    to: "-1",
    answer: "-8",
    correct: true,
  },
  {
    from: "-1",
    to: "5",
    answer: "+6",
    correct: false,
  },
];

export const StatsPanel = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <aside
      className={`w-[30%] overflow-auto rounded-[24px] border shadow-sm flex flex-col justify-between h-full ${isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"}`}
    >
      <div className="p-6">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-7 w-7 items-center justify-center text-blue-600">
            <div className="flex items-end gap-1">
              <span className="h-4 w-1.5 rounded-full bg-blue-600" />
              <span className="h-6 w-1.5 rounded-full bg-blue-600" />
              <span className="h-8 w-1.5 rounded-full bg-blue-600" />
            </div>
          </div>

          <div>
            <h2
              className={`text-[22px] font-black leading-none ${isDarkMode ? "text-white" : "text-slate-950"}`}
            >
              Статистика
            </h2>

            <p
              className={`mt-3 text-[15px] font-medium ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}
            >
              Твой прогресс в текущей игре
            </p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`rounded-[16px] border ${isDarkMode ? "border-slate-600 bg-slate-800" : "border-slate-200 bg-white"} p-5`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    size={24}
                    strokeWidth={2.4}
                    className={item.iconClassName}
                  />

                  <p
                    className={`text-[16px] font-semibold ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {item.title}
                  </p>
                </div>

                <p
                  className={`mt-4 text-[26px] font-black leading-none ${isDarkMode ? "text-white" : "text-slate-950"}`}
                >
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className={`mt-6 flex items-center gap-5 rounded-[18px] border ${isDarkMode ? "bg-slate-800 border-slate-600" : "border-amber-300 bg-amber-50/60"} p-5`}
        >
          <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-amber-100">
            <Trophy
              size={36}
              className="fill-amber-400 text-amber-400"
              strokeWidth={2.2}
            />
          </div>

          <div>
            <p
              className={`text-[15px] font-semibold ${isDarkMode ? "text-white" : "text-slate-600"}`}
            >
              Лучший результат
            </p>

            <p
              className={`mt-2 text-[30px] font-black leading-none ${isDarkMode ? "text-white" : "text-slate-950"}`}
            >
              9 / 10
            </p>

            <p
              className={`mt-2 text-[14px] font-medium ${isDarkMode ? "text-white" : "text-slate-500"}`}
            >
              Попробуй побить свой рекорд!
            </p>
          </div>
        </div>
      </div>

      <div
        className={`border-t ${isDarkMode ? "border-slate-600" : "border-slate-200"} p-6`}
      >
        <div className="flex items-center gap-3">
          <Clock3 size={24} className="text-blue-600" strokeWidth={2.4} />

          <h3
            className={`text-[20px] font-black ${isDarkMode ? "text-white" : "text-slate-950"}`}
          >
            Последние ответы
          </h3>
        </div>

        <div className="mt-5 space-y-3">
          {history.map((item) => (
            <HistoryItem
              key={`${item.from}-${item.to}-${item.answer}`}
              from={item.from}
              to={item.to}
              answer={item.answer}
              correct={item.correct}
            />
          ))}
        </div>

        <button
          type="button"
          className={`mt-5 h-[52px] w-full rounded-[14px] border text-[15px] font-extrabold transition ${isDarkMode ? "border-blue-700 bg-slate-800 text-white hover:bg-slate-700" : "border-blue-300 bg-white text-blue-600 hover:bg-blue-50"}`}
        >
          Посмотреть всю историю
        </button>
      </div>
    </aside>
  );
};

type HistoryItemProps = {
  from: string;
  to: string;
  answer: string;
  correct: boolean;
};

const HistoryItem = ({ from, to, answer, correct }: HistoryItemProps) => {
  return (
    <div className="flex h-[54px] items-center justify-between rounded-[14px] border border-slate-200 bg-white px-4">
      <p className="text-[16px] font-extrabold text-slate-950">
        {from} → {to}
      </p>

      <p
        className={`text-[18px] font-black ${
          correct ? "text-green-600" : "text-red-500"
        }`}
      >
        {answer}
      </p>

      <span
        className={`rounded-full px-4 py-1.5 text-[14px] font-extrabold ${
          correct ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
        }`}
      >
        {correct ? "Верно" : "Ошибка"}
      </span>
    </div>
  );
};
