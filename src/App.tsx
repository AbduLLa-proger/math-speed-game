import { useState } from "react";
import { Header } from "./components/Header";
import { GameBoard } from "./components/GameBoard";
import { GameResult } from "./components/GameResult";
import { StatsPanel, type GameHistoryItem } from "./components/StatsPanel";
import {
  Sidebar,
  type DifficultyKey,
  type ModeKey,
  type GameType,
} from "./components/Sidebar";

const difficultyRanges: Record<DifficultyKey, number> = {
  easy: 9,
  medium: 19,
  hard: 49,
  expert: 99,
};

type BestResults = {
  practiceAccuracy: number;
  survivalRounds: number;
};
type AnswerStatus = "idle" | "correct" | "incorrect";

const BEST_RESULTS_KEY = "math-speed-best-results";

const getInitialBestResults = (): BestResults => {
  try {
    const savedResults = localStorage.getItem(BEST_RESULTS_KEY);

    if (!savedResults) {
      return {
        practiceAccuracy: 0,
        survivalRounds: 0,
      };
    }

    const parsedResults = JSON.parse(savedResults) as Partial<BestResults>;

    return {
      practiceAccuracy: parsedResults.practiceAccuracy ?? 0,
      survivalRounds: parsedResults.survivalRounds ?? 0,
    };
  } catch {
    return {
      practiceAccuracy: 0,
      survivalRounds: 0,
    };
  }
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

  const [selectedGameType, setSelectedGameType] =
    useState<GameType>("practice");
  const [activeGameType, setActiveGameType] = useState<GameType>("practice");
  const [bestResults, setBestResults] = useState<BestResults>(
    getInitialBestResults,
  );
  const [answerStatus, setAnswerStatus] = useState<AnswerStatus>("idle");
  const [accuracy, setAccuracy] = useState(0);

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const [finalUserAnswer, setFinalUserAnswer] = useState<number | null>(null);
  const [finalCorrectAnswer, setFinalCorrectAnswer] = useState<number | null>(
    null,
  );

  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [history, setHistory] = useState<GameHistoryItem[]>([]);

  const [previousNumber, setPreviousNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [round, setRound] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartGame = () => {
    const startNumber = 0;
    const change = generateChange(selectedDifficulty, selectedMode);
    const nextNumber = startNumber + change;

    setActiveGameType(activeGameType);
    setPreviousNumber(startNumber);
    setCurrentNumber(nextNumber);
    setRound(1);
    setUserAnswer("");
    setIsGameStarted(true);
    setScore(0);
    setStreak(0);
    setCorrectAnswers(0);
    setMistakes(0);
    setHistory([]);
    setAnswerStatus("idle");
    setFeedbackMessage("");
    setTotalAttempts(0);
    setIsGameOver(false);
    setFinalUserAnswer(null);
    setFinalCorrectAnswer(null);
  };

  const handleAnswerChange = (value: string) => {
    setUserAnswer(value);
    setAnswerStatus("idle");
    setFeedbackMessage("");
  };

  const handleBackToSettings = () => {
    setIsGameStarted(false);
    setIsGameOver(false);
    setPreviousNumber(0);
    setCurrentNumber(0);
    setRound(0);
    setUserAnswer("");
    setAnswerStatus("idle");
    setFeedbackMessage("");
  };

  const saveBestResults = () => {
    setBestResults((previousResults) => {
      const nextResults =
        activeGameType === "practice"
          ? {
              ...previousResults,
              practiceAccuracy: Math.max(
                previousResults.practiceAccuracy,
                accuracy,
              ),
            }
          : {
              ...previousResults,
              survivalRounds: Math.max(
                previousResults.survivalRounds,
                correctAnswers,
              ),
            };

      try {
        localStorage.setItem(BEST_RESULTS_KEY, JSON.stringify(nextResults));
      } catch {
        // Игра продолжит работать, даже если localStorage недоступен.
      }

      return nextResults;
    });
  };

  const handleSubmitAnswer = () => {
    if (!isGameStarted || userAnswer.trim() === "") return;

    const parsedAnswer = Number(userAnswer);

    if (!Number.isFinite(parsedAnswer)) return;

    const correctAnswer = currentNumber - previousNumber;
    const isCorrect = parsedAnswer === correctAnswer;

    const historyItem: GameHistoryItem = {
      from: previousNumber,
      to: currentNumber,
      answer: parsedAnswer,
      correct: isCorrect,
    };

    setTotalAttempts((previousValue) => previousValue + 1);
    setHistory((previousHistory) => [historyItem, ...previousHistory]);
    setUserAnswer("");

    if (!isCorrect) {
      setMistakes((previousValue) => previousValue + 1);
      setStreak(0);
      setAnswerStatus("incorrect");

      if (selectedGameType === "practice") {
        setFeedbackMessage("Неверно. Попробуй еще раз.");
        return;
      } else if (selectedGameType === "survival") {
        const accuracy =
          totalAttempts === 0
            ? 0
            : Math.round((correctAnswers / totalAttempts) * 100);
        setAccuracy(accuracy);
        setFinalUserAnswer(parsedAnswer);
        setFinalCorrectAnswer(correctAnswer);
        setFeedbackMessage(`Игра окончена. Правильный ответ: ${correctAnswer}`);
        setIsGameStarted(false);
        setIsGameOver(true);

        saveBestResults();

        return;
      }
      setFeedbackMessage(`Игра окончена. Правильный ответ: ${correctAnswer}`);
      setIsGameStarted(false);
      setIsGameOver(true);

      saveBestResults();

      return;
    }

    setAnswerStatus("correct");
    setFeedbackMessage("Верно! +100 очков");
    setScore((previousScore) => previousScore + 100);
    setCorrectAnswers((previousValue) => previousValue + 1);
    setStreak((previousStreak) => previousStreak + 1);

    if (round >= 10) {
      setIsGameStarted(false);
      setIsGameOver(true);
      saveBestResults();
      setFeedbackMessage("Игра завершена!");
      return;
    }

    const nextPreviousNumber = currentNumber;
    const change = generateChange(selectedDifficulty, selectedMode);
    const nextCurrentNumber = nextPreviousNumber + change;

    setPreviousNumber(nextPreviousNumber);
    setCurrentNumber(nextCurrentNumber);
    setRound((previousRound) => previousRound + 1);
  };

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const displayedGameType =
    isGameStarted || isGameOver ? activeGameType : selectedGameType;

  const bestResult =
    displayedGameType === "practice"
      ? `${bestResults.practiceAccuracy}%`
      : `${bestResults.survivalRounds} / 10`;

  const isSettingsLocked = isGameStarted || isGameOver;

  return (
    <main
      className={`content-center min-h-dvh xl:h-dvh p-5 text-slate-900 transition xl:overflow-hidden xl:p-5 ${
        isDarkMode ? "bg-slate-950" : "bg-[#f4f7fb]"
      }`}
    >
      <div className="mx-auto flex min-h-full max-w-[1800px] flex-col xl:h-full">
        <Header
          isDarkMode={isDarkMode}
          bestResult={bestResult}
          onToggleTheme={handleToggleTheme}
        />

        <section className="game-layout mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[300px_minmax(0,1fr)] xl:min-h-0 xl:flex-1 xl:grid-cols-[310px_minmax(560px,1fr)_340px]">
          <div className="order-2 min-h-0 lg:order-1">
            <Sidebar
              isDarkMode={isDarkMode}
              isSettingsLocked={isSettingsLocked}
              selectedDifficulty={selectedDifficulty}
              selectedMode={selectedMode}
              selectedGameType={selectedGameType}
              onDifficultyChange={setSelectedDifficulty}
              onModeChange={setSelectedMode}
              onGameTypeChange={setSelectedGameType}
              onStartGame={handleStartGame}
            />
          </div>

          <div className="order-1 min-h-0 lg:order-2 xl:order-2 xl:h-full">
            {isGameOver ? (
              <GameResult
                isDarkMode={isDarkMode}
                gameType={selectedGameType}
                score={score}
                correctAnswers={correctAnswers}
                mistakes={mistakes}
                totalAttempts={totalAttempts}
                completedRounds={correctAnswers}
                totalRounds={10}
                finalUserAnswer={finalUserAnswer}
                finalCorrectAnswer={finalCorrectAnswer}
                onPlayAgain={handleStartGame}
                onBackToSettings={handleBackToSettings}
              />
            ) : (
              <GameBoard
                isDarkMode={isDarkMode}
                previousNumber={previousNumber}
                currentNumber={currentNumber}
                round={round}
                totalRounds={10}
                isGameStarted={isGameStarted}
                userAnswer={userAnswer}
                onAnswerChange={handleAnswerChange}
                onSubmitAnswer={handleSubmitAnswer}
                answerStatus={answerStatus}
                feedbackMessage={feedbackMessage}
              />
            )}
          </div>

          <div className="order-3 min-h-0 lg:col-span-2 xl:col-span-1 xl:h-full">
            <StatsPanel
              isDarkMode={isDarkMode}
              gameType={selectedGameType}
              score={score}
              bestResult={bestResult}
              streak={streak}
              correctAnswers={correctAnswers}
              mistakes={mistakes}
              accuracy={accuracy}
              history={history}
            />
          </div>
        </section>
      </div>
    </main>
  );
};
