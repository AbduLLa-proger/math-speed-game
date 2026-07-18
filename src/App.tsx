import { useState } from "react";
import { Header } from "./components/Header";
import { GameBoard } from "./components/GameBoard";
import { StatsPanel } from "./components/StatsPanel";
import {
  Sidebar,
  type DifficultyKey,
  type ModeKey,
} from "./components/Sidebar";

const difficultyRanges: Record<DifficultyKey, number> = {
  easy: 9,
  medium: 19,
  hard: 49,
  expert: 99,
};

const generateChange = (difficulty: DifficultyKey, mode: ModeKey): number => {
  const maxChange = difficultyRanges[difficulty];
  const value = Math.floor(Math.random() * maxChange) + 1;

  if (mode === "plus") return value;
  else if (mode === "minus") return -value;

  return Math.random() > 0.5 ? value : -value;
};

export const App = () => {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyKey>("easy");
  const [selectedMode, setSelectedMode] = useState<ModeKey>("mixed");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [mistake, setMistake] = useState(0);
  const [streak, setStreak] = useState(0);

  const [previousNumber, setPreviousNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [round, setRound] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartGame = () => {
    const startNumber = 0;
    const change = generateChange(selectedDifficulty, selectedMode);
    const nextNumber = startNumber + change;

    setPreviousNumber(startNumber);
    setCurrentNumber(nextNumber);
    setRound(1);
    setIsGameStarted(true);
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
            <GameBoard
              isDarkMode={isDarkMode}
              previousNumber={previousNumber}
              currentNumber={currentNumber}
              round={round}
              totalRounds={10}
              isGameStarted={isGameStarted}
              userAnswer={userAnswer}
              onAnswerChange={setUserAnswer}
              onSubmitAnswer={handleSubmitAnswer}
            />
          </div>

          <div className="order-3 min-h-0 lg:col-span-2 xl:col-span-1">
            <StatsPanel isDarkMode={isDarkMode} />
          </div>
        </section>
      </div>
    </main>
  );
};
