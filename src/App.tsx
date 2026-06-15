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
      className={`min-h-screen p-5 text-slate-900 transition ${
        isDarkMode ? "bg-slate-950" : "bg-[#f4f7fb]"
      }`}
    >
      <div className="mx-auto w-[80%] h-[770px] ">
        <Header isDarkMode={isDarkMode} onToggleTheme={handleToggleTheme} />

        <section className="flex mt-5 gap-5 h-[90%]">
          <Sidebar
            isDarkMode={isDarkMode}
            selectedDifficulty={selectedDifficulty}
            selectedMode={selectedMode}
            onDifficultyChange={setSelectedDifficulty}
            onModeChange={setSelectedMode}
            onStartGame={handleStartGame}
          />

          <GameBoard isDarkMode={isDarkMode} />

          <StatsPanel isDarkMode={isDarkMode} />
        </section>
      </div>
    </main>
  );
};
