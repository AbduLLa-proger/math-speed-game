import {
  type TDifficultyKey,
  type TBestResults,
  type TModeKey,
} from "../types/game";

export const INITIAL_BEST_RESULTS: TBestResults = {
  fixed: {},
  infinite: {
    practiceCorrectAnswers: 0,
    survivalRounds: 0,
  },
};

export const DIFFICULTY_RANGE: Record<TDifficultyKey, number> = {
  easy: 9,
  medium: 20,
  hard: 50,
  expert: 100,
};

export const PLAYER_NAME_KEY = "math-speed-player-name";

export const BEST_RESULTS_KEY = "math-speed-best-results";

export const calculateAccuracy = (
  correctAnswers: number,
  totalAttempts: number,
): number => {
  if (totalAttempts === 0) return 0;

  return Math.round((correctAnswers / totalAttempts) * 100);
};

export const getInitialPlayerName = (): string => {
  try {
    return localStorage.getItem(PLAYER_NAME_KEY) || "Игрок";
  } catch {
    return "Игрок";
  }
};

export const getInitialBestResults = (): TBestResults => {
  try {
    const savedResults = localStorage.getItem(BEST_RESULTS_KEY);

    if (!savedResults) return INITIAL_BEST_RESULTS;

    const parsedResults = JSON.parse(savedResults) as Partial<TBestResults>;

    return {
      fixed: parsedResults.fixed ?? {},
      infinite: {
        practiceCorrectAnswers:
          parsedResults.infinite?.practiceCorrectAnswers ?? 0,
        survivalRounds: parsedResults.infinite?.survivalRounds ?? 0,
      },
    };
  } catch {
    return INITIAL_BEST_RESULTS;
  }
};

export const generateChange = (
  difficulty: TDifficultyKey,
  mode: TModeKey,
): number => {
  const maxChange = DIFFICULTY_RANGE[difficulty];
  const value = Math.floor(Math.random() * maxChange) + 1;

  if (mode === "plus") return value;
  if (mode === "minus") return -value;

  return Math.random() > 0.5 ? value : -value;
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds,
  ).padStart(2, "0")}`;
};

export const DIFFICULTIES = [
  {
    key: "easy" as TDifficultyKey,
    title: "Легко",
    description: "Числа от -9 до +9",
    dotClassName: "bg-green-500",
  },
  {
    key: "medium" as TDifficultyKey,
    title: "Средне",
    description: "Числа от -20 до +20",
    dotClassName: "bg-blue-500",
  },
  {
    key: "hard" as TDifficultyKey,
    title: "Сложно",
    description: "Числа от -50 до +50",
    dotClassName: "bg-amber-500",
  },
  {
    key: "expert" as TDifficultyKey,
    title: "Эксперт",
    description: "Числа от -100 до +100",
    dotClassName: "bg-red-500",
  },
];

export const MODES = [
  {
    key: "plus" as TModeKey,
    title: "Только сложение",
    iconClassName: "text-green-500",
  },
  {
    key: "minus" as TModeKey,
    title: "Только вычитание",
    iconClassName: "text-blue-500",
  },
  {
    key: "mixed" as TModeKey,
    title: "Смешанный режим",
    iconClassName: "text-violet-500",
  },
];
