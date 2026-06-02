import { Header } from "./components/Header";

export const App = () => {
  return (
    <main className="min-h-screen bg-[#f4f7fb] px-6 py-6 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <Header />

        <section className="mt-6 rounded-[32px] border border-dashed border-slate-300 bg-white/60 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
            Next step
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-950">
            Здесь дальше сделаем основной экран игры
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            Сейчас мы зафиксируем рабочий Header, а потом перейдём к layout:
            левая панель, игровая область и правая статистика.
          </p>
        </section>
      </div>
    </main>
  );
};
