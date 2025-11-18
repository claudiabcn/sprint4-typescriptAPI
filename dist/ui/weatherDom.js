var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getWeather } from "../api/getWeather.js";
import { getUserLocation } from "../utils/getUserLocation.js";
import { getWeatherIcon, getWeatherDescription } from "../utils/weatherCode.js";
const weatherDisplay = document.getElementById("weather__display");
export function renderWeather(lat, lon) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!weatherDisplay)
            return;
        const current = yield getWeather(lat, lon);
        if (!current) {
            weatherDisplay.innerHTML = `Error loading weather data ⚠️`;
            return;
        }
        const weatherIcon = getWeatherIcon(current.weatherCode);
        const weatherDesc = getWeatherDescription(current.weatherCode);
        weatherDisplay.innerHTML = `
    <div class="weather-header">
      <span class="icon">${weatherIcon}</span>
      <span class="desc">${weatherDesc}</span>
    </div>
      <span>🌡️ ${current.temperature.toFixed(1)}°C</span>
      <span>🌧️ ${current.precipitationProbability.toFixed(0)}%</span>
      <span>📆 UV: ${current.uvIndex.toFixed(1)}</span>`;
    });
}
export function startWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!weatherDisplay)
            return;
        weatherDisplay.innerHTML = `Loading weather...`;
        try {
            const { lat, lon } = yield getUserLocation();
            yield renderWeather(lat, lon);
        }
        catch (error) {
            weatherDisplay.innerHTML = `Please enable location access`;
        }
    });
}
//# sourceMappingURL=weatherDom.js.map