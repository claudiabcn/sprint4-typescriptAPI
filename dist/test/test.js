import { describe, it, expect, beforeEach } from 'vitest';
import { getState, setCurrentJoke, updateScore, resetState, hasUserVoted } from './jokeState';
describe('jokeState', () => {
    beforeEach(() => {
        resetState();
    });
    it('should initialize with default state', () => {
        const state = getState();
        expect(state.currentJoke).toBeNull();
        expect(state.currentScore).toBeNull();
        expect(state.hasVoted).toBe(false);
    });
    it('should set current joke', () => {
        setCurrentJoke('Test joke');
        const state = getState();
        expect(state.currentJoke).toBe('Test joke');
        expect(state.currentScore).toBeNull();
        expect(state.hasVoted).toBe(false);
    });
    it('should update score', () => {
        setCurrentJoke('Test joke');
        updateScore(2);
        const state = getState();
        expect(state.currentScore).toBe(2);
        expect(state.hasVoted).toBe(true);
    });
    it('should check if user has voted', () => {
        expect(hasUserVoted()).toBe(false);
        updateScore(3);
        expect(hasUserVoted()).toBe(true);
    });
    it('should reset state', () => {
        setCurrentJoke('Test joke');
        updateScore(1);
        resetState();
        const state = getState();
        expect(state.currentJoke).toBeNull();
        expect(state.currentScore).toBeNull();
        expect(state.hasVoted).toBe(false);
    });
});
//# sourceMappingURL=test.js.map