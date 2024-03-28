import { PayloadAction, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { getReservation, getReservaClientId, deleteData } from '../../services/reservation'
import { Reservation } from "../../types/reserva";

type ReservaState = Array<Reservation>
const initialState: ReservaState = []

const reservaSlice = createSlice({
   name: 'reservas',
   initialState,
   reducers: {
      setReserva(_state, action: PayloadAction<ReservaState>) {
         return action.payload;
      },
      deleteReserva(state, action: PayloadAction<string>) {
         return state.filter(reserva => reserva._id !== action.payload);
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
         console.error("Error initializing reservaId:", error);
      }
   }
}

export const deleteReserva = (id: string): ThunkAction<void, RootState, void, PayloadAction<string>> => {
   return async dispatch => {
      try {
         await deleteData(id);
         dispatch(reservaSlice.actions.deleteReserva(id));
      } catch (error) {
         console.error("Error deleting reservation:", error);
      }
   }
}

export default reservaSlice.reducer