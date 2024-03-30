import axios, { AxiosResponse } from "axios";
import { Catering, CreateCateringData } from "../types/catering";

const baseUrl = 'http://localhost:3000/attendance/'

const getCatering = async () => {
   try {
      const response: AxiosResponse<Catering[]> = await axios.get<Catering[]>(baseUrl);
      return (response.data);
   } catch (error) {
      console.error("Error fetching Catering data:", error);
   }
}

const getCateringClientId = async (userId: string) => {
   try {
      console.log(userId)
      const response: AxiosResponse<Catering[]> = await axios.get<Catering[]>(`${baseUrl}${userId}`);
      console.log(response)
      return (response.data);
   } catch (error) {
      console.error("Error fetching Catering data:", error);
   }
}

const createCatering = async (credentials: CreateCateringData): Promise<any> => {
   try {
      const response: AxiosResponse<any> = await axios.post(`${baseUrl}`, credentials)
      return response.data
   } catch (error) {
      console.error(`Error al iniciar sesion}:`, error);
      throw error;
   }
}

const deleteCatering = async (id: string) => {

   try {
      const response: AxiosResponse<any> = await axios.delete(`${baseUrl}${id}`)
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
