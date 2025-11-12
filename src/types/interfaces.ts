export interface DadJoke {
  joke: string;
}

export interface ChuckNorrisJoke {
  value: string;
  icon_url: string;
  id: string;
  url: string;
  created_at: string;
  updated_at: string;
  categories: string[];
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

export interface CurrentWeatherInfo {
  temperature: number;
  precipitationProbability: number;
  uvIndex: number;
  weatherCode: number;
}

export interface WeatherData {
  current: {
    temperature_2m: number;
    precipitation_probability: number;
    uv_index: number;
  };
  daily: {
    weather_code: number[];
  };
}