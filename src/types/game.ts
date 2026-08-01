// App.tsx
export type TAnswerStatus = "idle" | "correct" | "incorrect";
export type TRoundsMode = "fixed" | "infinite";
export type TFixedBestResult = {
  practiceAccuracy: number;
  survivalRounds: number;
};
export type TBestResults = {
  fixed: Record<number, TFixedBestResult>;
  infinite: {
    practiceCorrectAnswers: number;
    survivalRounds: number;
  };
};

// GameBoard.tsx
export interface IGameBoard {
  isDarkMode: boolean;
  totalRounds: number | null;
  canFinishGame: boolean;
  onFinishGame: () => void;
  time: string;
  previousNumber: number;
  currentNumber: number;
  round: number;
  isGameStarted: boolean;
  userAnswer: string;
  onAnswerChange?: (value: string) => void;
  onSubmitAnswer?: () => void;
  answerStatus?: string;
  feedbackMessage?: string;
}

export type INumberCardProps = {
  label: string;
  value: string;
  isDarkMode: boolean;
};

// Header.tsx
export type THeaderProps = {
  isDarkMode: boolean;
  bestResult: string;
  playerName: string;
  onToggleTheme: () => void;
  onPlayerNameChange: (name: string) => void;
};

// History.tsx
export type THistoryModalProps = {
  isDarkMode: boolean;
  history: TGameHistoryItem[];
  onClose: () => void;
};

// Sidebar.tsx
export type TDifficultyKey = "easy" | "medium" | "hard" | "expert";
export type TModeKey = "plus" | "minus" | "mixed";
export type TGameType = "practice" | "survival";

export type TSidebarProps = {
  isDarkMode: boolean;
  isSettingsLocked: boolean;
  selectedDifficulty: TDifficultyKey;
  selectedMode: TModeKey;
  selectedGameType: TGameType;
  roundsMode: TRoundsMode;
  selectedRounds: number;
  onDifficultyChange: (difficulty: TDifficultyKey) => void;
  onModeChange: (mode: TModeKey) => void;
  onGameTypeChange: (gameType: TGameType) => void;
  onRoundsModeChange: (mode: TRoundsMode) => void;
  onSelectedRoundsChange: (rounds: number) => void;
  onStartGame: () => void;
};

// StatsPanel.tsx
export type TGameHistoryItem = {
  from: number;
  to: number;
  answer: number;
  correct: boolean;
};

export type THistoryItemProps = {
  from: string;
  to: string;
  answer: string;
  correct: boolean;
  isDarkMode: boolean;
};

export type TStatsPanelProps = {
  isDarkMode: boolean;
  gameType: TGameType;
  score: number;
  bestResult: string;
  streak: number;
  correctAnswers: number;
  mistakes: number;
  accuracy: number;
  history: TGameHistoryItem[];
  onOpenHistory: () => void;
};

// GameResult.tsx
export type TGameResultProps = {
  isDarkMode: boolean;
  gameType: TGameType;
  score: number;
  correctAnswers: number;
  mistakes: number;
  totalAttempts: number;
  completedRounds: number;
  totalRounds: number | null;
  finalUserAnswer: number | null;
  finalCorrectAnswer: number | null;
  onPlayAgain: () => void;
  onBackToSettings: () => void;
  time: string;
};

export type TResultCardProps = {
  label: string;
  value: string;
  isDarkMode: boolean;
};
