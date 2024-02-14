import axios, { AxiosResponse } from "axios";
import { Service } from "../types/services";

const baseUrl = 'http://localhost:3000/service'

const getServices = async () => {
   try {
      const response: AxiosResponse<Service[]> = await axios.get<Service[]>(baseUrl);
      console.log(response)
      return (response.data);
   } catch (error) {
      console.error("Error fetching Service data:", error);
   }
}

export {
   getServices
}