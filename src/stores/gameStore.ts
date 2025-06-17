import { makeAutoObservable, runInAction } from 'mobx';
import { Game, User, Prediction } from '../types';
import { getGames, getUser, submitPrediction, updatePrediction, getPredictions } from '../services/api';

export class GameStore {
  games: Game[] = [];
  user: User | null = null;
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchGames() {
    this.loading = true;
    this.error = null;

    try {
      const games = await getGames();
      runInAction(() => {
        this.games = games;
      });
    } catch (err) {
      runInAction(() => {
        this.error = 'Failed to fetch games';
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async fetchUser() {
    this.loading = true;
    this.error = null;

    try {
      const user = await getUser();
      runInAction(() => {
        this.user = user;
      });
    } catch (err) {
      runInAction(() => {
        this.error = 'Failed to fetch user data';
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async submitNewPrediction(prediction: Prediction) {
    this.loading = true;
    this.error = null;

    try {
      const updatedPrediction = await submitPrediction(prediction);
      if (this.user) {
        runInAction(() => {
          this.user.predictions.push(updatedPrediction);
        });
      }
    } catch (err) {
      runInAction(() => {
        this.error = 'Failed to submit prediction';
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async updateExistingPrediction(prediction: Prediction) {
    this.loading = true;
    this.error = null;

    try {
      const updatedPrediction = await updatePrediction(prediction);
      if (this.user) {
        runInAction(() => {
          const index = this.user.predictions.findIndex(
            p => p.gameId === prediction.gameId
          );
          if (index !== -1) {
            this.user.predictions[index] = updatedPrediction;
          }
        });
      }
    } catch (err) {
      runInAction(() => {
        this.error = 'Failed to update prediction';
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  get filteredGames() {
    return this.games.filter(game => {
      if (this.user?.predictions) {
        const hasPrediction = this.user.predictions.some(
          p => p.gameId === game.id
        );
        return !hasPrediction;
      }
      return true;
    });
  }

  get upcomingGames() {
    return this.games.filter(game => game.status === 'scheduled');
  }

  get liveGames() {
    return this.games.filter(game => game.status === 'inProgress');
  }

  get completedGames() {
    return this.games.filter(game => game.status === 'final');
  }
}

export const gameStore = new GameStore();
