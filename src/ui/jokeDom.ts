import { getJoke } from '../services/getJoke.js';
import { getState, setCurrentJoke, updateScore, resetState, hasUserVoted } from '../services/jokeState.js';
import { addReport } from '../services/reportTracking.js';

const jokeElement = document.getElementById('joke') as HTMLParagraphElement;
const btnElement = document.getElementById('btn') as HTMLButtonElement;
const btnScore1 = document.getElementById('btn-score1') as HTMLButtonElement;
const btnScore2 = document.getElementById('btn-score2') as HTMLButtonElement;
const btnScore3 = document.getElementById('btn-score3') as HTMLButtonElement;

const scoreButtons: HTMLButtonElement[] = [btnScore1, btnScore2, btnScore3].filter(
    (btn): btn is HTMLButtonElement => btn !== null
);

export async function displayNewJoke() { 
    const state = getState()
    
    if (hasUserVoted() && state.currentJoke !== null) {
        addReport(state.currentJoke, state.currentScore!);
        resetState()
    }

    clearScoreButtonSelection();

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
            handleScoreClick(1, btnScore1);
        });
    }

if (btnScore2) {
        btnScore2.addEventListener('click', () => {
            handleScoreClick(2, btnScore2);
        });
    }

if (btnScore3) {
        btnScore3.addEventListener('click', () => {
            handleScoreClick(3, btnScore3);
        });
    }
}

function clearScoreButtonSelection(): void {
    scoreButtons.forEach(button => {
        button.classList.remove('bg-fuchsia-600', 'ring-offset-2', 'ring-4', 'ring-primary'); 
        button.classList.add('bg-primary', 'hover:bg-fuchsia-600'); 
    });
}

function handleScoreClick(score: 1 | 2 | 3, clickedButton: HTMLButtonElement): void {

    clearScoreButtonSelection();

    clickedButton.classList.remove('bg-primary', 'hover:bg-fuchsia-600'); 
    clickedButton.classList.add('bg-fuchsia-600', 'ring-offset-2', 'ring-4', 'ring-primary'); 

    updateScore(score);
}