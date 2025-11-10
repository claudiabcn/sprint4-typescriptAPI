export interface Joke {
  joke: string;
}

export interface JokeReport {
joke: string;
score: 1 | 2 | 3; 
date: string;    
}

export interface JokeState {
  currentJoke: string | null;       
  currentScore: 1 | 2 | 3 | null;   
  hasVoted: boolean;              
}