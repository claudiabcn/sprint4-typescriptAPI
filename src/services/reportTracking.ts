import { JokeReport } from "../types/interfaces.js";

const reportJokes: JokeReport[] = [];

export function addReport(joke: string, score: 1 | 2 | 3): void {
  if (!joke || joke.trim() === "") {
    return;
  }

  const newReport: JokeReport = {
    joke,
    score,
    date: new Date().toISOString(),
  };
  reportJokes.push(newReport);
  console.table(reportJokes);
}

export function getReports(): JokeReport[] {
  return reportJokes;
}
