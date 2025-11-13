import { describe, it, expect, beforeEach } from 'vitest';
import { 
  getState, 
  setCurrentJoke, 
  updateScore, 
  resetState, 
  hasUserVoted 
} from '../services/jokeState';

describe('jokeState', () => {
  beforeEach(() => {
    resetState();
  });

  it('should initialize with default state', () => {
    const state = getState();
    
    expect(state.currentJoke).toBeNull();
    expect(state.currentScore).toBeNull();
    expect(state.hasVoted).toBe(false);
  });

  it('should set current joke', () => {
    setCurrentJoke('Test joke');
    const state = getState();
    
    expect(state.currentJoke).toBe('Test joke');
    expect(state.currentScore).toBeNull();
    expect(state.hasVoted).toBe(false);
  });

});