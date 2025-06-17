import axios from 'axios';
import { Game, User, Prediction } from '../types';
import { sampleGames, sampleUser } from '../data/sample-data';

const API_BASE_URL = 'http://localhost:3000';

// Create an axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Mock API endpoints
api.interceptors.request.use((config) => {
  // For local development, we'll mock the API responses
  if (config.url === '/games') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...config,
          data: sampleGames,
        });
      }, 500); // Add a small delay to simulate network latency
    });
  }
  if (config.url === '/user') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...config,
          data: sampleUser,
        });
      }, 500);
    });
  }
  if (config.url === '/predictions') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...config,
          data: sampleUser.predictions,
        });
      }, 500);
    });
  }
  return config;
});

export const getGames = async (): Promise<Game[]> => {
  try {
    return sampleGames;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};

export const getUser = async (): Promise<User> => {
  try {
    return sampleUser;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const submitPrediction = async (prediction: Prediction): Promise<Prediction> => {
  try {
    // Create a new prediction ID
    const newId = `pred_${Date.now()}`;
    const newPrediction = {
      ...prediction,
      id: newId,
      result: 'pending' as const,
      payout: 0,
    };

    // Update sample user's predictions
    sampleUser.predictions = [...sampleUser.predictions, newPrediction];
    return newPrediction;
  } catch (error) {
    console.error('Error submitting prediction:', error);
    throw error;
  }
};

export const updatePrediction = async (prediction: Prediction): Promise<Prediction> => {
  try {
    // Find and update the prediction
    const index = sampleUser.predictions.findIndex(p => p.gameId === prediction.gameId);
    if (index !== -1) {
      sampleUser.predictions[index] = prediction;
      return prediction;
    }
    throw new Error('Prediction not found');
  } catch (error) {
    console.error('Error updating prediction:', error);
    throw error;
  }
};

export const getPredictions = async (): Promise<Prediction[]> => {
  try {
    return sampleUser.predictions;
  } catch (error) {
    console.error('Error fetching predictions:', error);
    throw error;
  }
};
