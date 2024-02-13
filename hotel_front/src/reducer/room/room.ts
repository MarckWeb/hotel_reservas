import { PayloadAction, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Room } from "../../types/rooms";
import { getRooms } from '../../services/rooms';

type RoomState = Array<Room>
const initialState: RoomState = []

const roomSlice = createSlice({
   name: 'rooms',
   initialState,
   reducers: {
      setRooms(state, action: PayloadAction<RoomState>) {
         return action.payload;
      },
   }
})

export const { setRooms } = roomSlice.actions
export const initializeRooms = (): ThunkAction<void, RootState, unknown, PayloadAction<RoomState>> => {
   return async dispatch => {
      try {
         const rooms = await getRooms();
         dispatch(setRooms(rooms ?? []));
      } catch (error) {
         console.error("Error initializing rooms:", error);
      }
   }
}
export default roomSlice.reducer

