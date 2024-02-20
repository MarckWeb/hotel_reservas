import axios, { AxiosResponse } from "axios";
import { Room } from "../types/rooms";

const baseUrl = 'http://localhost:3000/room/'

const getRooms = async () => {
   try {
      const response: AxiosResponse<Room[]> = await axios.get<Room[]>(baseUrl);
      return (response.data);
   } catch (error) {
      console.error("Error fetching room data:", error);
   }
}

const getRoomId = async (id: string): Promise<Room> => {
   try {
      const response: AxiosResponse<Room> = await axios.get(`${baseUrl}${id}`);
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