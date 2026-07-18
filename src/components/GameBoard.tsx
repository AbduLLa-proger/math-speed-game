import { Clock3 } from "lucide-react";

export const GameBoard = ({ isDarkMode }: { isDarkMode: boolean }) => {
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
              className={`text-blue-600 ml-3 ${isDarkMode ? "text-white" : "text-slate-950"}`}
            >
              4 / 10
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
          className={`text-[18px] font-extrabold ${isDarkMode ? "text-white" : "text-slate-950"}`}
        >
          Текущее число
        </p>

        <p
          className={`mt-8 text-[118px] font-black leading-none tracking-[-0.08em] ${isDarkMode ? "text-white" : "text-slate-950"}`}
        >
          -1
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-5">
        <NumberCard label="Было" value="7" isDarkMode={isDarkMode} />
        <NumberCard label="Стало" value="-1" isDarkMode={isDarkMode} />
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
          placeholder="Например: -8"
          className={`h-[78px] w-full rounded-[16px] border-2 focus:outline-none focus:ring-0 focus:border-transparent ${isDarkMode ? "border-blue-600 bg-slate-800 text-white" : "border-blue-600 bg-white text-slate-950"} px-6 text-[26px] font-semibold outline-none transition placeholder:${isDarkMode ? "text-slate-500" : "text-slate-300"} focus:border-blue-700 focus:ring-4 focus:ring-blue-100`}
        />
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
      className={`flex h-[140px] flex-col items-center justify-center rounded-[18px] border border-slate-200 ${isDarkMode ? "bg-slate-800 text-white" : "bg-white text-slate-950"}`}
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
