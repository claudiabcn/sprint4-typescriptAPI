import { getJoke } from '../api/jokes.js';

const jokeElement = document.getElementById('joke');
const btnElement = document.getElementById('btn');

export async function displayNewJoke() { 
    if (jokeElement) {
        const joke = await getJoke();
        jokeElement.textContent = joke;
    }
}

export function setupEventListeners() { 
    if (btnElement) {
        btnElement.addEventListener('click', displayNewJoke);
    }
}
