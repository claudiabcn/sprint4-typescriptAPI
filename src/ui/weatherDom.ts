import { getWeather, extractCurrentWeatherInfo} from "../services/getWeather.js";
import { CurrentWeatherInfo } from "../types/interfaces.js";
import { getUserLocation } from "../utils/getUserLocation.js";
import { getWeatherIcon, getWeatherDescription } from "../utils/weatherCode.js";

const weatherDisplay = document.getElementById("weather__display") as HTMLElement;

export async function renderWeather(lat: number, lon: number): Promise<void> {
    const data = await getWeather(lat, lon);
    
    if (!data || !weatherDisplay) {
        if (weatherDisplay) {
            weatherDisplay.innerHTML = `
                <div class="text-red-500">
                    <span class="text-2xl">⚠️</span>
                    <p class="text-sm mt-1">Error loading weather data</p>
                </div>
            `;
        }
        return;
    }
    
    const current: CurrentWeatherInfo | null = extractCurrentWeatherInfo(data);
        
    if (!current) {
        weatherDisplay.innerHTML = `
            <div class="text-red-500">
                <span class="text-2xl">⚠️</span>
                <p class="text-sm mt-1">Unable to extract weather data</p>
            </div>
        `;
        return;
    }

    const weatherIcon = getWeatherIcon(current.weatherCode);
    const weatherDesc = getWeatherDescription(current.weatherCode);

    weatherDisplay.innerHTML = `
        <div class="flex flex-col gap-2">
            <div class="flex items-center justify-center gap-2">
                <span class="text-4xl">${weatherIcon}</span>
                <span class="text-lg font-semibold text-gray-800">${weatherDesc}</span>
            </div>
            <div class="flex items-center justify-center gap-4 text-gray-700 text-base">
                <span class="font-semibold">🌡️ ${current.temperature.toFixed(1)}°C</span>
                <span>🌧️ ${current.precipitationProbability.toFixed(0)}%</span>
                <span>🔆 UV: ${current.uvIndex.toFixed(1)}</span>
            </div>
        </div>
    `;
}

export async function startWeather(): Promise<void> {
    if (!weatherDisplay) return;
    
    weatherDisplay.innerHTML = `
        <div class="text-gray-500">
            <div class="animate-pulse">🌍 Loading weather...</div>
        </div>
    `;
    
    try {
        const { lat, lon } = await getUserLocation();
        await renderWeather(lat, lon);
    } catch (error) {
        console.error("Error starting weather:", error);
        weatherDisplay.innerHTML = `
            <div class="text-orange-500">
                <span class="text-2xl">⚠️</span>
                <p class="text-sm mt-1">Weather unavailable</p>
                <p class="text-xs text-gray-500">Please enable location access</p>
            </div>
        `;
    }
}