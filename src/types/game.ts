// App.tsx
export type AnswerStatus = "idle" | "correct" | "incorrect";
export type BestResults = {
  practiceAccuracy: number;
  survivalRounds: number;
};

// GameBoard.tsx
export interface IGameBoard {
  isDarkMode: boolean;
  previousNumber: number;
  currentNumber: number;
  round: number;
  totalRounds: number;
  isGameStarted: boolean;
  userAnswer: string;
  onAnswerChange?: (value: string) => void;
  onSubmitAnswer?: () => void;
  answerStatus?: string;
  feedbackMessage?: string;
  time: string;
}

export type NumberCardProps = {
  label: string;
  value: string;
  isDarkMode: boolean;
};

// Header.tsx
export type HeaderProps = {
  isDarkMode: boolean;
  bestResult: string;
  playerName: string;
  onToggleTheme: () => void;
  onPlayerNameChange: (name: string) => void;
};

// History.tsx
export type HistoryModalProps = {
  isDarkMode: boolean;
  history: GameHistoryItem[];
  onClose: () => void;
};

// Sidebar.tsx
export type DifficultyKey = "easy" | "medium" | "hard" | "expert";
export type ModeKey = "plus" | "minus" | "mixed";
export type GameType = "practice" | "survival";

export type SidebarProps = {
  isDarkMode: boolean;
  isSettingsLocked: boolean;
  selectedDifficulty: DifficultyKey;
  selectedMode: ModeKey;
  selectedGameType: GameType;
  onGameTypeChange: (gameType: GameType) => void;
  onDifficultyChange: (difficulty: DifficultyKey) => void;
  onModeChange: (mode: ModeKey) => void;
  onStartGame: () => void;
};

// StatsPanel.tsx
export type GameHistoryItem = {
  from: number;
  to: number;
  answer: number;
  correct: boolean;
};

export type HistoryItemProps = {
  from: string;
  to: string;
  answer: string;
  correct: boolean;
  isDarkMode: boolean;
};

export type StatsPanelProps = {
  isDarkMode: boolean;
  gameType: GameType;
  score: number;
  bestResult: string;
  streak: number;
  correctAnswers: number;
  mistakes: number;
  accuracy: number;
  history: GameHistoryItem[];
  onOpenHistory: () => void;
};

// GameResult.tsx
export type GameResultProps = {
  isDarkMode: boolean;
  gameType: GameType;
  score: number;
  correctAnswers: number;
  mistakes: number;
  totalAttempts: number;
  completedRounds: number;
  totalRounds: number;
  finalUserAnswer: number | null;
  finalCorrectAnswer: number | null;
  onPlayAgain: () => void;
  onBackToSettings: () => void;
  time: string;
};

export type ResultCardProps = {
  label: string;
  value: string;
  isDarkMode: boolean;
};
