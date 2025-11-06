var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getJoke } from '../api/jokes';
const jokeElement = document.getElementById('joke');
const btnElement = document.getElementById('btn');
export function displayNewJoke() {
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
//# sourceMappingURL=dom.js.map