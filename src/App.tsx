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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleStartGame = () => {
    console.log("start game", { selectedDifficulty, selectedMode });
  };

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <main
      className={`content-center min-h-screen overflow-y-auto overflow-hidden p-5 text-slate-900 transition xl:overflow-hidden xl:p-5 ${
        isDarkMode ? "bg-slate-950" : "bg-[#f4f7fb]"
      }`}
    >
      <div className="mx-auto flex min-h-full max-w-[1800px] flex-col">
        <Header isDarkMode={isDarkMode} onToggleTheme={handleToggleTheme} />

        <section className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[300px_minmax(0,1fr)] xl:min-h-0 xl:flex-1 xl:grid-cols-[310px_minmax(560px,1fr)_340px]">
          <div className="order-2 min-h-0 lg:order-1">
            <Sidebar
              isDarkMode={isDarkMode}
              selectedDifficulty={selectedDifficulty}
              selectedMode={selectedMode}
              onDifficultyChange={setSelectedDifficulty}
              onModeChange={setSelectedMode}
              onStartGame={handleStartGame}
            />
          </div>

          <div className="order-1 min-h-0 lg:order-2">
            <GameBoard isDarkMode={isDarkMode} />
          </div>

          <div className="order-3 min-h-0 lg:col-span-2 xl:col-span-1">
            <StatsPanel isDarkMode={isDarkMode} />
          </div>
        </section>
      </div>
    </main>
  );
};
