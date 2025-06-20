import { Game, User, Prediction } from '../types';

export const sampleGames: Game[] = [
  {
    id: 'gm1001',
    status: 'scheduled',
    startTime: '2025-05-25T18:00:00Z',
    homeTeam: {
      name: 'Los Angeles Lakers',
      abbreviation: 'LAL',
      record: '42-28'
    },
    awayTeam: {
      name: 'Boston Celtics',
      abbreviation: 'BOS',
      record: '45-25'
    },
    odds: {
      spread: '+3.5',
      favorite: 'BOS'
    }
  },
  {
    id: 'gm1002',
    status: 'inProgress',
    period: '3rd',
    clock: '8:24',
    homeTeam: {
      name: 'Golden State Warriors',
      abbreviation: 'GSW',
      record: '38-32',
      score: 78
    },
    awayTeam: {
      name: 'Dallas Mavericks',
      abbreviation: 'DAL',
      record: '40-30',
      score: 81
    },
    odds: {
      spread: '-2.5',
      favorite: 'DAL'
    }
  },
  {
    id: 'gm1003',
    status: 'final',
    homeTeam: {
      name: 'Miami Heat',
      abbreviation: 'MIA',
      record: '36-34',
      score: 112
    },
    awayTeam: {
      name: 'New York Knicks',
      abbreviation: 'NYK',
      record: '35-35',
      score: 103
    },
    winner: 'MIA'
  }
];

export const sampleUser: User = {
  id: 'usr123',
  username: 'sportsfan42',
  balance: 1000,
  predictions: [
    {
      gameId: 'gm1003',
      pick: 'MIA',
      amount: 100,
      result: 'win',
      payout: 190
    },
    {
      gameId: 'gm1002',
      pick: 'DAL',
      amount: 50,
      result: 'pending'
    }
  ],
  stats: {
    wins: 7,
    losses: 4,
    pending: 1
  }
};
