import axios from "axios";
import type { Location, WeatherData } from "../../types";

//
export const fetchWeatherInfo = async (locations: Location[], apiKey: string): Promise<WeatherData[]> => {
  try {
    const responses = await Promise.all(
      locations.map(async location => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`; // Correct URL
        console.log("Fetching URL:", url);
        const response = await fetch(url);

        if (!response.ok) {
          const errorText = await response.text(); // Get the error message from the API
          console.error(`API Error: ${response.status} ${response.statusText}`, errorText); // Log detailed error
          throw new Error(`HTTP error ${response.status}: ${response.statusText} - ${errorText}`); // Re-throw for Zustand to handle
        }
        return response.json();
      })
    );
    return responses;
  } catch (error) {
    console.error("Error in fetchWeatherInfo:", error);
    throw error; // Important: Re-throw the error
  }
};

export interface detailLocation {
  name: string | undefined;
}

export async function FetchDetailWeather(locations: string | undefined, apiKey: string): Promise<WeatherData> {
  const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=${apiKey}`);
  return response.data;
}
