import { fetchData } from "../api/apis.js";
import { Joke } from "../types/interfaces.js";

export async function getJoke(): Promise<string> {
  try {
    const data = await fetchData<Joke>("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });
    return data.joke;
  } catch (error) {
    return "Sorry, the joke couldn't be loaded.";
  }
}
