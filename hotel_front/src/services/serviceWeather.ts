import axios from "axios";
import { Location } from "../types/weather";

const baseUrl = import.meta.env.VITE_API_URL_WEATHER;
const apiKey = import.meta.env.VITE_API_KEY

const defaultLocation: Location = {
   latitude: 43.262985,
   longitude: -2.935013,
};

const getApiWeather = async (location: Location = defaultLocation) => {
   try {
      const response = await axios.get(`${baseUrl}?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`);
      return (response.data);
   } catch (error) {
      console.error("Error fetching weather data:", error);
   }
}


export {
   getApiWeather
}