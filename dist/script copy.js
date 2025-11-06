"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://icanhazdadjoke.com', {
                headers: { 'Accept': 'application/json' }
            });
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            const data = yield response.json();
            return data.joke;
        }
        catch (error) {
            console.error(error);
            return "Sorry, the joke couldn't be loaded.";
        }
    });
}
const jokeElement = document.getElementById('joke');
const btnElement = document.getElementById('btn');
function displayNewJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        if (jokeElement) {
            const joke = yield getJoke();
            jokeElement.textContent = joke;
        }
    });
}
displayNewJoke();
if (btnElement) {
    btnElement.addEventListener('click', displayNewJoke);
}
//# sourceMappingURL=script%20copy.js.map