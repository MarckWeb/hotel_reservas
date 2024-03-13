import axios, { AxiosResponse } from "axios";
import { Reservation } from "../types/reserva";
import { CreateReserva } from "../types/reserva";

const baseUrl = 'http://localhost:3000/reservation'

const getReservation = async () => {
   try {
      const response: AxiosResponse<Reservation[]> = await axios.get<Reservation[]>(baseUrl);
      console.log(response)
      return (response.data);
   } catch (error) {
      console.error("Error fetching Reservation data:", error);
   }
}

const createReserva = async (credentials: CreateReserva): Promise<any> => {
   try {
      const response: AxiosResponse<any> = await axios.post(`${baseUrl}`, credentials)
      console.log(response)
      return response.data
   } catch (error) {
      console.error(`Error al iniciar sesion}:`, error);
      throw error;
   }
}

export {
   getReservation,
   createReserva
}

//hacer el envio por axios a los datos