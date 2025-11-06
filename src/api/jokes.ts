export async function getJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data: any = await response.json();
    return data.joke;
  } catch (error) {
    console.error(error);
    return "Sorry, the joke couldn't be loaded.";
  }  }
