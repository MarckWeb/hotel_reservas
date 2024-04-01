import axios, { AxiosResponse } from "axios";
import { Room } from "../types/rooms";
const URL_BASE: string = import.meta.env.VITE_URL_BASE;
const URL_ROOMS: string = `${URL_BASE}room/`

const getRooms = async (): Promise<Room[] | undefined> => {
   try {
      const response: AxiosResponse<Room[]> = await axios.get<Room[]>(URL_ROOMS);
      return (response.data);
   } catch (error) {
      console.error("Error fetching room data:", error);
   }
}

const getRoomId = async (id: string): Promise<Room> => {
   try {
      const response: AxiosResponse<Room> = await axios.get(`${URL_ROOMS}${id}`);
      return response.data;
   } catch (error) {
      console.error(`Error al obtener la habitacion con ID ${id}:`, error);
      throw error;
   }
}


export {
   getRooms,
   getRoomId
}