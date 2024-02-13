import axios, { AxiosResponse } from "axios";
import { Room } from "../types/rooms";

const baseUrl = 'http://localhost:3000/room'

const getRooms = async () => {
   try {
      const response: AxiosResponse<Room[]> = await axios.get<Room[]>(baseUrl);
      return (response.data);
   } catch (error) {
      console.error("Error fetching room data:", error);
   }
}

export {
   getRooms
}