import { PayloadAction, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Room } from "../../types/rooms";
import { getRooms, getRoomId } from '../../services/rooms';

type RoomState = Array<Room>
const initialState: RoomState = []

const roomSlice = createSlice({
   name: 'rooms',
   initialState,
   reducers: {
      setRooms(_state, action: PayloadAction<RoomState>) {
         return action.payload;
      },
   }
})

export const { setRooms } = roomSlice.actions

export const initializeRooms = (): ThunkAction<void, RootState, void, PayloadAction<RoomState>> => {
   return async dispatch => {
      try {
         const rooms = await getRooms();
         dispatch(setRooms(rooms ?? []));
      } catch (error) {
         console.error("Error initializing rooms:", error);
      }
   }
}

export const handleRoomId = (id: string): ThunkAction<void, RootState, void, PayloadAction<RoomState>> => {
   return async distpach => {
      try {
         const user = await getRoomId(id);
         distpach(setRooms([user]));
      } catch (error) {
         console.error("Error initializing roomId:", error);
      }
   }
}
export default roomSlice.reducer

