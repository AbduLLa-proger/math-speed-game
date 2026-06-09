import { Clock3 } from "lucide-react";

export const GameBoard = () => {
  return (
    <section className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-sm flex flex-col justify-between">
      <div className="mb-7 flex items-start justify-between">
        <div>
          <h2 className="text-[26px] font-black leading-none text-slate-950">
            Раунд <span className="text-blue-600">4 / 10</span>
          </h2>

          <p className="mt-4 text-[16px] font-medium text-slate-500">
            Определи, на сколько изменилось число
          </p>
        </div>

        <div className="flex h-[70px] items-center gap-4 rounded-[18px] bg-blue-50 px-7 text-blue-600">
          <Clock3 size={30} strokeWidth={2.4} />

          <span className="text-[30px] font-black leading-none">00:42</span>
        </div>
      </div>

      <div className="flex h-[285px] flex-col items-center justify-center rounded-[20px] bg-slate-50">
        <p className="text-[18px] font-extrabold text-slate-800">
          Текущее число
        </p>

        <p className="mt-8 text-[118px] font-black leading-none tracking-[-0.08em] text-slate-950">
          -1
        </p>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-5">
        <NumberCard label="Было" value="7" />
        <NumberCard label="Стало" value="-1" />
      </div>

      <div className="mt-7">
        <label
          htmlFor="answer"
          className="mb-4 block text-[18px] font-extrabold text-slate-950"
        >
          На сколько изменилось число?
        </label>

        <input
          id="answer"
          type="number"
          inputMode="numeric"
          placeholder="Например: -8"
          className="h-[78px] w-full rounded-[16px] border-2 border-blue-600 bg-white px-6 text-[26px] font-semibold text-slate-950 outline-none transition placeholder:text-slate-300 focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
        />
      </div>
    </section>
  );
};

type NumberCardProps = {
  label: string;
  value: string;
};

const NumberCard = ({ label, value }: NumberCardProps) => {
  return (
    <div className="flex h-[140px] flex-col items-center justify-center rounded-[18px] border border-slate-200 bg-white">
      <p className="text-[16px] font-extrabold text-slate-600">{label}</p>

      <p className="mt-4 text-[58px] font-black leading-none tracking-[-0.05em] text-slate-950">
        {value}
      </p>
    </div>
  );
};
