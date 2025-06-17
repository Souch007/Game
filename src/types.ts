export interface Team {
  name: string;
  abbreviation: string;
  record: string;
  score?: number;
}

export interface Odds {
  spread: string;
  favorite: string;
}

export interface Game {
  id: string;
  status: 'scheduled' | 'inProgress' | 'final';
  startTime?: string;
  period?: string;
  clock?: string;
  homeTeam: Team;
  awayTeam: Team;
  odds?: Odds;
  winner?: string;
  title?: string;
  description?: string;
  rating?: number;
  genre?: string;
  releaseDate?: string;
}

export interface Prediction {
  gameId: string;
  pick: string;
  amount: number;
  result: 'win' | 'loss' | 'pending';
  payout?: number;
}

export interface Typography {
  h1: {
    fontSize: number;
    fontWeight: string;
  };
  h2: {
    fontSize: number;
    fontWeight: string;
  };
  h3: {
    fontSize: number;
    fontWeight: string;
  };
  body: {
    fontSize: number;
    lineHeight: number;
  };
}

export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    textSecondary: string;
    border: string;
    error: string;
    success: string;
    warning: string;
  };
  typography: Typography;
  spacing: {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
  };
  borderRadius: {
    small: number;
    medium: number;
    large: number;
  };
}

export interface UserStats {
  wins: number;
  losses: number;
  pending: number;
}

export interface User {
  id: string;
  username: string;
  balance: number;
  predictions: Prediction[];
  stats: UserStats;
}
