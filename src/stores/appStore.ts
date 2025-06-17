import { makeAutoObservable, reaction } from 'mobx';
import { Game, User, Prediction } from '../types';
import { sampleGames, sampleUser } from '../data/sample-data';
import { GameStore } from './gameStore';

export class AppStore {
  gameStore = new GameStore();
  selectedGame: Game | null = null;
  isLoading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);

    // Watch for game status changes and update predictions
    reaction(
      () => this.gameStore.games,
      (games) => {
        this.updateUserPredictions(games);
      }
    );

    // Initialize data
    this.initializeData();
  }

  initializeData = async () => {
    this.isLoading = true;
    this.error = null;

    try {
      await this.gameStore.fetchGames();
      await this.gameStore.fetchUser();
    } catch (err) {
      this.error = 'Failed to initialize data';
    } finally {
      this.isLoading = false;
    }
  };

  updateUserPredictions = (games: Game[]) => {
    if (!this.gameStore.user?.predictions) return;

    const updatedPredictions = games.map((g) => {
      const prediction = this.gameStore.user.predictions.find(
        (p) => p.gameId === g.id
      );
      if (prediction && g.status === 'final') {
        return {
          ...prediction,
          result: g.winner === prediction.pick ? 'win' : 'loss',
          payout: g.winner === prediction.pick ? prediction.amount * 1.9 : 0,
        };
      }
      return prediction;
    }).filter((p): p is Prediction => p !== undefined);

    this.gameStore.user = {
      ...this.gameStore.user,
      predictions: updatedPredictions,
      stats: {
        wins: updatedPredictions.filter((p) => p.result === 'win').length,
        losses: updatedPredictions.filter((p) => p.result === 'loss').length,
        pending: updatedPredictions.filter((p) => p.result === 'pending').length,
      },
    };
  };

  selectGame = (game: Game) => {
    this.selectedGame = game;
  };

  get filteredGames() {
    return this.gameStore.games.filter((game) => {
      if (this.gameStore.user?.predictions) {
        const hasPrediction = this.gameStore.user.predictions.some(
          (p) => p.gameId === game.id
        );
        return !hasPrediction;
      }
      return true;
    });
  };

  get upcomingGames() {
    return this.gameStore.games.filter((game) => game.status === 'scheduled');
  };

  get liveGames() {
    return this.gameStore.games.filter((game) => game.status === 'live');
  };

  get completedGames() {
    return this.gameStore.games.filter((game) => game.status === 'final');
  };

  submitPrediction = async (prediction: Prediction) => {
    try {
      await this.gameStore.submitNewPrediction(prediction);
    } catch (error) {
      this.error = 'Failed to submit prediction';
    }
  };

  updatePrediction = async (prediction: Prediction) => {
    try {
      await this.gameStore.updateExistingPrediction(prediction);
    } catch (error) {
      this.error = 'Failed to update prediction';
    }
  };

  clearError = () => {
    this.error = null;
  };
}

export const appStore = new AppStore();

export const useStore = () => appStore;
