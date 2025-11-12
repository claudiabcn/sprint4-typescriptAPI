var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchData } from "../api/apis.js";
export function getWeather(lat, lon) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,uv_index,precipitation_probability&daily=weather_code&forecast_days=3&timezone=auto`;
        try {
            const data = yield fetchData(url);
            return data;
        }
        catch (error) {
            return null;
        }
    });
}
export function extractCurrentWeatherInfo(data) {
    if (!data.current || !data.daily) {
        return null;
    }
    return {
        temperature: data.current.temperature_2m,
        precipitationProbability: data.current.precipitation_probability,
        uvIndex: data.current.uv_index,
        weatherCode: data.daily.weather_code[0],
    };
}
//# sourceMappingURL=getWeather.js.map