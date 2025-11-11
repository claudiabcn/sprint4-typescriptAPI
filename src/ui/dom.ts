import { getJoke } from '../api/jokes.js';
import { getState, setCurrentJoke, updateScore, resetState, hasUserVoted } from '../state/jokeState.js';
import { addReport } from '../services/reportTracking.js';

const jokeElement = document.getElementById('joke') as HTMLParagraphElement;
const btnElement = document.getElementById('btn') as HTMLButtonElement;
const btnScore1 = document.getElementById('btn-score1') as HTMLButtonElement;
const btnScore2 = document.getElementById('btn-score2') as HTMLButtonElement;;
const btnScore3 = document.getElementById('btn-score3') as HTMLButtonElement;;


export async function displayNewJoke() { 
    const state = getState()
    
if (hasUserVoted() && state.currentJoke !== null) {
addReport(state.currentJoke,state.currentScore!);
resetState()
    }
    
    if (jokeElement) {
        const joke = await getJoke();
        jokeElement.textContent = joke;
        setCurrentJoke(joke);
            }
}

export function setupEventListeners() { 
    if (btnElement) {
        btnElement.addEventListener('click', displayNewJoke);       
    }

    if (btnScore1) {
        btnScore1.addEventListener('click', () => {
            updateScore(1);
        });
    }

    if (btnScore2) {
        btnScore2.addEventListener('click', () => {
            updateScore(2);
        });
    }

    if (btnScore3) {
        btnScore3.addEventListener('click', () => {
            updateScore(3);
        });
    }

    
}