import axios, { AxiosResponse } from "axios";
import { Catering, CreateCateringData } from "../types/catering";

const URL_BASE: string = import.meta.env.VITE_URL_BASE;
const URL_CATERING: string = `${URL_BASE}attendance/`


const getCatering = async () => {
   try {
      const response: AxiosResponse<Catering[]> = await axios.get<Catering[]>(URL_CATERING);
      return (response.data);
   } catch (error) {
      console.error("Error fetching Catering data:", error);
   }
}

const getCateringClientId = async (userId: string) => {
   try {

      const response: AxiosResponse<Catering[]> = await axios.get<Catering[]>(`${URL_CATERING}${userId}`);

      return (response.data);
   } catch (error) {
      console.error("Error fetching Catering data:", error);
   }
}

const createCatering = async (credentials: CreateCateringData): Promise<any> => {
   try {
      const response: AxiosResponse<any> = await axios.post(`${URL_CATERING}`, credentials)
      return response.data
   } catch (error) {
      console.error(`Error al iniciar sesion}:`, error);
      throw error;
   }
}

const deleteCatering = async (id: string) => {

   try {
      const response: AxiosResponse<any> = await axios.delete(`${URL_CATERING}${id}`)
      return response.data
   } catch (error) {
      console.error(`Error al eliminar comanda:`, error);
      throw error;
   }
}

export {
   getCatering,
   getCateringClientId,
   createCatering,
   deleteCatering

}
