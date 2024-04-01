import axios, { AxiosResponse } from "axios";
import { Reservation } from "../types/reserva";
import { CreateReserva } from "../types/reserva";
const URL_BASE: string = import.meta.env.VITE_URL_BASE;
const URL_RESERVATION: string = `${URL_BASE}reservation/`

const getReservation = async () => {
   try {
      const response: AxiosResponse<Reservation[]> = await axios.get<Reservation[]>(URL_RESERVATION);
      console.log(response)
      return (response.data);
   } catch (error) {
      console.error("Error fetching Reservation data:", error);
   }
}

const getReservaClientId = async (userId: string) => {
   try {
      const response: AxiosResponse<Reservation[]> = await axios.get<Reservation[]>(`${URL_RESERVATION}${userId}`);
      return (response.data);
   } catch (error) {
      console.error("Error fetching Reservation data:", error);
   }
}

const createReserva = async (credentials: CreateReserva): Promise<any> => {
   try {
      const response: AxiosResponse<any> = await axios.post(`${URL_RESERVATION}`, credentials)
      return response.data
   } catch (error) {
      console.error(`Error al iniciar sesion}:`, error);
      throw error;
   }
}

const deleteData = async (id: string) => {

   try {
      const response: AxiosResponse<any> = await axios.delete(`${URL_RESERVATION}${id}`)
      return response.data
   } catch (error) {
      console.error(`Error al iniciar sesion}:`, error);
      throw error;
   }
}

export {
   getReservation,
   getReservaClientId,
   createReserva,
   deleteData
}
