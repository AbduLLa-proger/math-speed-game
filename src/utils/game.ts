import {
  type DifficultyKey,
  type BestResults,
  type ModeKey,
} from "../types/game";

export const difficultyRanges: Record<DifficultyKey, number> = {
  easy: 9,
  medium: 20,
  hard: 50,
  expert: 100,
};

export const PLAYER_NAME_KEY = "math-speed-player-name";

export const BEST_RESULTS_KEY = "math-speed-best-results";

export const getInitialPlayerName = (): string => {
  try {
    return localStorage.getItem(PLAYER_NAME_KEY) || "Игрок";
  } catch {
    return "Игрок";
  }
};

export const getInitialBestResults = (): BestResults => {
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

export const generateChange = (
  difficulty: DifficultyKey,
  mode: ModeKey,
): number => {
  const maxChange = difficultyRanges[difficulty];
  const value = Math.floor(Math.random() * maxChange) + 1;

  if (mode === "plus") return value;
  else if (mode === "minus") return -value;

  return Math.random() > 0.5 ? value : -value;
};

export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds,
  ).padStart(2, "0")}`;
};

export const difficulties = [
  {
    key: "easy" as DifficultyKey,
    title: "Легко",
    description: "Числа от -9 до +9",
    dotClassName: "bg-green-500",
  },
  {
    key: "medium" as DifficultyKey,
    title: "Средне",
    description: "Числа от -20 до +20",
    dotClassName: "bg-blue-500",
  },
  {
    key: "hard" as DifficultyKey,
    title: "Сложно",
    description: "Числа от -50 до +50",
    dotClassName: "bg-amber-500",
  },
  {
    key: "expert" as DifficultyKey,
    title: "Эксперт",
    description: "Числа от -100 до +100",
    dotClassName: "bg-red-500",
  },
];

export const modes = [
  {
    key: "plus" as ModeKey,
    title: "Только сложение",
    iconClassName: "text-green-500",
  },
  {
    key: "minus" as ModeKey,
    title: "Только вычитание",
    iconClassName: "text-blue-500",
  },
  {
    key: "mixed" as ModeKey,
    title: "Смешанный режим",
    iconClassName: "text-violet-500",
  },
];
