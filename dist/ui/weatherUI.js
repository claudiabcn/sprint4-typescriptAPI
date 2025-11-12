var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getWeather, extractCurrentWeatherInfo, getUserLocation } from "../utils/getWeather.js";
const weatherDisplay = document.getElementById("weather__display");
export function renderWeather(lat, lon) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield getWeather(lat, lon);
        if (!data) {
            if (weatherDisplay) {
                weatherDisplay.textContent = "⚠️ Error loading weather data";
            }
            return;
        }
        const current = extractCurrentWeatherInfo(data);
        if (!current) {
            weatherDisplay.textContent = "⚠️ Unable to extract weather data";
            return;
        }
        weatherDisplay.innerHTML = `
        <div class="flex items-center justify-center gap-4 text-gray-700">
            <span class="font-semibold">🌡️ ${current.temperature.toFixed(0)}°C</span>
            <span>🌧️ ${current.precipitation_probability}%</span>
            <span>🔆 UV: ${current.uv_index.toFixed(0)}</span>
        </div>
    `;
    });
}
export function startWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { lat, lon } = yield getUserLocation();
            yield renderWeather(lat, lon);
        }
        catch (error) {
        }
    });
}
//# sourceMappingURL=weatherUI.js.map