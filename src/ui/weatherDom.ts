import { getWeather } from "../api/getWeather.js";
import { getUserLocation } from "../utils/getUserLocation.js";
import { getWeatherIcon, getWeatherDescription } from "../utils/weatherCode.js";

const weatherDisplay = document.getElementById(
  "weather__display"
) as HTMLElement;

export async function renderWeather(lat: number, lon: number): Promise<void> {
  if (!weatherDisplay) return;

  const current = await getWeather(lat, lon);

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
}

export async function startWeather(): Promise<void> {
  if (!weatherDisplay) return;
  weatherDisplay.innerHTML = `Loading weather...`;

  try {
    const { lat, lon } = await getUserLocation();
    await renderWeather(lat, lon);
  } catch (error) {
    weatherDisplay.innerHTML = `Please enable location access`;
  }
}
