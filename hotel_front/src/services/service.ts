import axios, { AxiosResponse } from "axios";
import { Service } from "../types/services";
const URL_BASE = import.meta.env.VITE_URL_BASE;
const URL_SERVICE = `${URL_BASE}service`

const getServices = async () => {
   try {
      const response: AxiosResponse<Service[]> = await axios.get<Service[]>(URL_SERVICE);
      return (response.data);
   } catch (error) {
      console.error("Error fetching Service data:", error);
   }
}

export {
   getServices
}