import { PayloadAction, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getReservation, createReserva, getReservaClientId } from '../../services/reservation'
import { Reservation } from "../../types/reserva";

type ReservaState = Array<Reservation>
const initialState: ReservaState = []

const reservaSlice = createSlice({
   name: 'reservas',
   initialState,
   reducers: {
      setReserva(_state, action: PayloadAction<ReservaState>) {
         console.log(_state, action)
         return action.payload;
      },
   }
})

export const { setReserva } = reservaSlice.actions

export const initializeReserva = (): ThunkAction<void, RootState, void, PayloadAction<ReservaState>> => {
   return async dispatch => {
      try {
         const reservation = await getReservation();
         dispatch(setReserva(reservation ?? []));
      } catch (error) {
         console.error("Error initializing reservation:", error);
      }
   }
}

export const handleReservaClient = (id: string): ThunkAction<void, RootState, void, PayloadAction<ReservaState>> => {
   return async distpach => {
      try {
         const reservations = await getReservaClientId(id);
         distpach(setReserva(reservations ?? []));
      } catch (error) {
         console.error("Error initializing roomId:", error);
      }
   }
}

export default reservaSlice.reducer