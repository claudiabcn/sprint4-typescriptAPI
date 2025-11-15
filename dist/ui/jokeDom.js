var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getJoke } from '../services/getJoke.js';
import { getState, setCurrentJoke, updateScore, resetState } from '../services/jokeState.js';
import { addReport } from '../services/reportTracking.js';
const jokeElement = document.getElementById('joke');
const btnElement = document.getElementById('btn');
const btnScore1 = document.getElementById('btn-score1');
const btnScore2 = document.getElementById('btn-score2');
const btnScore3 = document.getElementById('btn-score3');
const scoreButtons = [btnScore1, btnScore2, btnScore3].filter((btn) => btn !== null);
export function displayNewJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const state = getState();
        if (state.currentJoke !== null) {
            addReport(state.currentJoke, state.currentScore || undefined);
        }
        resetState();
        clearScoreButtonSelection();
        if (jokeElement) {
            const joke = yield getJoke();
            if (joke) {
                jokeElement.textContent = joke;
                setCurrentJoke(joke);
            }
            else {
                jokeElement.textContent = "Sorry, the joke couldn't be loaded.";
            }
        }
    });
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
function clearScoreButtonSelection() {
    scoreButtons.forEach(button => {
        button.classList.remove('-translate-y-2', 'scale-110');
    });
}
function handleScoreClick(score, clickedButton) {
    clearScoreButtonSelection();
    clickedButton.classList.add('-translate-y-2', 'scale-110');
    updateScore(score);
}
//# sourceMappingURL=jokeDom.js.map