import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { GameBoard } from "./components/GameBoard";
import { GameResult } from "./components/GameResult";
import { HistoryModal } from "./components/HistoryModal";
import { StatsPanel } from "./components/StatsPanel";
import { Sidebar } from "./components/Sidebar.tsx";
import {
  calculateAccuracy,
  getInitialPlayerName,
  getInitialBestResults,
  generateChange,
  PLAYER_NAME_KEY,
  BEST_RESULTS_KEY,
  formatTime,
} from "./utils/game.ts";
import {
  type TGameHistoryItem,
  type TDifficultyKey,
  type TModeKey,
  type TGameType,
  type TAnswerStatus,
  type TBestResults,
  type TRoundsMode,
} from "./types/game.ts";

export const App = () => {
  const [roundsMode, setRoundsMode] = useState<TRoundsMode>("fixed");
  const [selectedRounds, setSelectedRounds] = useState(10);
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<TDifficultyKey>("easy");
  const [selectedMode, setSelectedMode] = useState<TModeKey>("mixed");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [playerName, setPlayerName] = useState(getInitialPlayerName);

  const [selectedGameType, setSelectedGameType] =
    useState<TGameType>("practice");
  const [bestResults, setBestResults] = useState<TBestResults>(
    getInitialBestResults,
  );
  const [answerStatus, setAnswerStatus] = useState<TAnswerStatus>("idle");

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [history, setHistory] = useState<TGameHistoryItem[]>([]);

  const [previousNumber, setPreviousNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [round, setRound] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const accuracy = calculateAccuracy(correctAnswers, totalAttempts);

  const totalRounds = roundsMode === "fixed" ? selectedRounds : null;

  const finalAttempt = history[0] ?? null;

  const fixedBestResult = bestResults.fixed[selectedRounds] ?? {
    practiceAccuracy: 0,
    survivalRounds: 0,
  };

  const bestResult =
    roundsMode === "fixed"
      ? selectedGameType === "practice"
        ? `${fixedBestResult.practiceAccuracy}%`
        : `${fixedBestResult.survivalRounds} / ${selectedRounds}`
      : selectedGameType === "practice"
        ? `${bestResults.infinite.practiceCorrectAnswers} верно`
        : `${bestResults.infinite.survivalRounds} раундов`;

  const isSettingsLocked = isGameStarted || isGameOver;
  const formattedTime = formatTime(elapsedSeconds);

  const handleStartGame = () => {
    const startNumber = 0;
    const change = generateChange(selectedDifficulty, selectedMode);
    const nextNumber = startNumber + change;

    setPreviousNumber(startNumber);
    setCurrentNumber(nextNumber);
    setElapsedSeconds(0);
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
  };

  const handlePlayerNameChange = (name: string) => {
    const trimmedName = name.trim();

    if (!trimmedName) return;

    setPlayerName(trimmedName);

    try {
      localStorage.setItem(PLAYER_NAME_KEY, trimmedName);
    } catch {
      console.error("Не удалось сохранить имя игрока");
    }
  };

  const handleFinishGame = () => {
    if (
      !isGameStarted ||
      roundsMode !== "infinite" ||
      selectedGameType !== "practice"
    ) {
      return;
    }

    completeGame(accuracy, correctAnswers, "Игра завершена!");
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

  const saveBestResults = (
    gameType: TGameType,
    finalAccuracy: number,
    finalCorrectAnswers: number,
  ) => {
    setBestResults((previousResults) => {
      let nextResults: TBestResults;

      if (roundsMode === "fixed") {
        const previousFixedResult = previousResults.fixed[selectedRounds] ?? {
          practiceAccuracy: 0,
          survivalRounds: 0,
        };

        const nextFixedResult =
          gameType === "practice"
            ? {
                ...previousFixedResult,
                practiceAccuracy: Math.max(
                  previousFixedResult.practiceAccuracy,
                  finalAccuracy,
                ),
              }
            : {
                ...previousFixedResult,
                survivalRounds: Math.max(
                  previousFixedResult.survivalRounds,
                  finalCorrectAnswers,
                ),
              };

        nextResults = {
          ...previousResults,
          fixed: {
            ...previousResults.fixed,
            [selectedRounds]: nextFixedResult,
          },
        };
      } else {
        nextResults =
          gameType === "practice"
            ? {
                ...previousResults,
                infinite: {
                  ...previousResults.infinite,
                  practiceCorrectAnswers: Math.max(
                    previousResults.infinite.practiceCorrectAnswers,
                    finalCorrectAnswers,
                  ),
                },
              }
            : {
                ...previousResults,
                infinite: {
                  ...previousResults.infinite,
                  survivalRounds: Math.max(
                    previousResults.infinite.survivalRounds,
                    finalCorrectAnswers,
                  ),
                },
              };
      }

      try {
        localStorage.setItem(BEST_RESULTS_KEY, JSON.stringify(nextResults));
      } catch {
        console.error("Не удалось сохранить лучший результат");
      }

      return nextResults;
    });
  };

  const completeGame = (
    finalAccuracy: number,
    finalCorrectAnswers: number,
    message: string,
  ) => {
    setIsGameStarted(false);
    setIsGameOver(true);
    setFeedbackMessage(message);

    saveBestResults(selectedGameType, finalAccuracy, finalCorrectAnswers);
  };

  const handleSubmitAnswer = () => {
    if (!isGameStarted || userAnswer.trim() === "") return;

    const parsedAnswer = Number(userAnswer);

    if (!Number.isFinite(parsedAnswer)) return;

    const correctAnswer = currentNumber - previousNumber;
    const isCorrect = parsedAnswer === correctAnswer;

    const nextTotalAttempts = totalAttempts + 1;
    const nextCorrectAnswers = correctAnswers + (isCorrect ? 1 : 0);
    const nextAccuracy = calculateAccuracy(
      nextCorrectAnswers,
      nextTotalAttempts,
    );

    const historyItem: TGameHistoryItem = {
      from: previousNumber,
      to: currentNumber,
      answer: parsedAnswer,
      correct: isCorrect,
    };

    setTotalAttempts(nextTotalAttempts);
    setHistory((previousHistory) => [historyItem, ...previousHistory]);
    setUserAnswer("");

    if (!isCorrect) {
      setMistakes((previousValue) => previousValue + 1);
      setStreak(0);
      setAnswerStatus("incorrect");

      if (selectedGameType === "practice") {
        setFeedbackMessage("Неверно. Попробуй еще раз.");
        return;
      }
      completeGame(
        nextAccuracy,
        nextCorrectAnswers,
        `Игра окончена. Правильный ответ: ${correctAnswer}`,
      );

      return;
    }

    setAnswerStatus("correct");
    setFeedbackMessage("Верно! +100 очков");
    setScore((previousScore) => previousScore + 100);
    setCorrectAnswers((previousValue) => previousValue + 1);
    setStreak((previousStreak) => previousStreak + 1);

    const isFinalRound = roundsMode === "fixed" && round >= selectedRounds;

    if (isFinalRound) {
      completeGame(nextAccuracy, nextCorrectAnswers, "Игра завершена!");
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

  useEffect(() => {
    if (!isGameStarted) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setElapsedSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isGameStarted]);

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
          playerName={playerName}
          onPlayerNameChange={handlePlayerNameChange}
        />

        <section className="game-layout mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[300px_minmax(0,1fr)] xl:min-h-0 xl:flex-1 xl:grid-cols-[310px_minmax(560px,1fr)_340px]">
          <div className="order-2 min-h-0 lg:order-1">
            <Sidebar
              isDarkMode={isDarkMode}
              isSettingsLocked={isSettingsLocked}
              selectedDifficulty={selectedDifficulty}
              selectedMode={selectedMode}
              selectedGameType={selectedGameType}
              roundsMode={roundsMode}
              selectedRounds={selectedRounds}
              onDifficultyChange={setSelectedDifficulty}
              onModeChange={setSelectedMode}
              onGameTypeChange={setSelectedGameType}
              onRoundsModeChange={setRoundsMode}
              onSelectedRoundsChange={setSelectedRounds}
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
                totalRounds={totalRounds}
                finalUserAnswer={finalAttempt?.answer ?? null}
                finalCorrectAnswer={
                  finalAttempt ? finalAttempt.to - finalAttempt.from : null
                }
                onPlayAgain={handleStartGame}
                onBackToSettings={handleBackToSettings}
                time={formattedTime}
              />
            ) : (
              <GameBoard
                isDarkMode={isDarkMode}
                totalRounds={totalRounds}
                canFinishGame={
                  roundsMode === "infinite" && selectedGameType === "practice"
                }
                onFinishGame={handleFinishGame}
                time={formattedTime}
                previousNumber={previousNumber}
                currentNumber={currentNumber}
                round={round}
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
              onOpenHistory={() => setIsHistoryOpen(true)}
            />
          </div>
        </section>
      </div>
      {isHistoryOpen && (
        <HistoryModal
          isDarkMode={isDarkMode}
          history={history}
          onClose={() => setIsHistoryOpen(false)}
        />
      )}
    </main>
  );
};
