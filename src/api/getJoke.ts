import { fetchData } from "./fetchData.js";
import { DadJoke, ChuckNorrisJoke } from "../types/interfaces.js";

export async function getJoke(): Promise<string | null> {
  try {
    const random = Math.random();

    if (random < 0.5) {
      const data = await fetchData<DadJoke>("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" },
      });
      return data.joke;
    } else {
      const data = await fetchData<ChuckNorrisJoke>(
        "https://api.chucknorris.io/jokes/random"
      );
      return data.value;
    }
  } catch (error) {
    return null;
  }
}
