let state = {
    currentJoke: null,
    currentScore: null,
    hasVoted: false
};
export function getState() {
    return Object.assign({}, state);
}
export function setCurrentJoke(joke) {
    state.currentJoke = joke;
    state.currentScore = null;
    state.hasVoted = false;
}
export function updateScore(score) {
    state.currentScore = score;
    state.hasVoted = true;
}
export function resetState() {
    state.currentJoke = null;
    state.currentScore = null;
    state.hasVoted = false;
}
export function hasUserVoted() {
    return state.hasVoted;
}
//# sourceMappingURL=jokeState.js.map