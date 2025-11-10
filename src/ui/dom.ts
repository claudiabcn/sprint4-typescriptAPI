import { getJoke } from '../api/jokes.js';

const jokeElement = document.getElementById('joke') as HTMLParagraphElement;
const btnElement = document.getElementById('btn') as HTMLButtonElement;
const btnScore1 = document.getElementById('btn-score1') as HTMLButtonElement;
const btnScore2 = document.getElementById('btn-score2') as HTMLButtonElement;;
const btnScore3 = document.getElementById('btn-score3') as HTMLButtonElement;;


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
