import { fetchData } from "../api/apis.js";
import { WeatherData, CurrentWeatherInfo } from "../types/interfaces.js";

export async function getWeather(
  lat: number,
  lon: number
): Promise<CurrentWeatherInfo | null> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,uv_index,precipitation_probability&daily=weather_code&forecast_days=3&timezone=auto`;

  try {
    const data = await fetchData<WeatherData>(url);

    if (!data.current || !data.daily) {
      return null;
    }

    return {
      temperature: data.current.temperature_2m,
      precipitationProbability: data.current.precipitation_probability,
      uvIndex: data.current.uv_index,
      weatherCode: data.daily.weather_code[0],
    };
  } catch (error) {
    return null;
  }
}
