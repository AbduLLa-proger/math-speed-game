import { useState } from "react";
import { Header } from "./components/Header";
import { GameBoard } from "./components/GameBoard";
import { StatsPanel } from "./components/StatsPanel";
import {
  Sidebar,
  type DifficultyKey,
  type ModeKey,
} from "./components/Sidebar";

export const App = () => {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyKey>("easy");
  const [selectedMode, setSelectedMode] = useState<ModeKey>("mixed");

  const handleStartGame = () => {
    console.log("start game", { selectedDifficulty, selectedMode });
  };

  return (
    <main className="min-h-screen bg-[#f4f7fb] px-6 py-6 text-slate-900">
      <div className="mx-auto max-w-7xl">
        <Header />

        <section className="mt-5 grid grid-cols-[370px_1fr_420px] gap-5">
          <Sidebar
            selectedDifficulty={selectedDifficulty}
            selectedMode={selectedMode}
            onDifficultyChange={setSelectedDifficulty}
            onModeChange={setSelectedMode}
            onStartGame={handleStartGame}
          />

          <GameBoard />

          <StatsPanel />
        </section>
      </div>
    </main>
  );
};
