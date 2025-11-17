export interface DadJoke {
  joke: string;
}

export interface ChuckNorrisJoke {
  value: string;
}

export interface JokeReport {
  joke: string;
  score: 1 | 2 | 3 | null;
  date: string;
}

export interface JokeState {
  currentJoke: string | null;
  currentScore: 1 | 2 | 3 | null;
  hasVoted: boolean;
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

export interface CurrentWeatherInfo {
  temperature: number;
  precipitationProbability: number;
  uvIndex: number;
  weatherCode: number;
}
