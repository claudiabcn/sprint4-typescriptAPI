import { JokeState } from "../types/interfaces.js";

let state: JokeState = {
  currentJoke: null,
  currentScore: null,
  hasVoted: false
};

export function getState(): JokeState {
  return { ...state };
}

export function setCurrentJoke(joke: string){
  state.currentJoke = joke;
  state.currentScore = null;
  state.hasVoted = false;
}

export function updateScore(score: 1 | 2 | 3) {
  state.currentScore = score;
  state.hasVoted = true;
}

export function resetState() {
  state.currentJoke = null;
  state.currentScore = null;
  state.hasVoted = false;
}

export function hasUserVoted(): boolean {
  return state.hasVoted;
}