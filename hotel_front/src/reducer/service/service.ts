import { PayloadAction, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Service } from "../../types/services";
import { getServices } from "../../services/service";

type ServiceState = Array<Service>
const initialState: ServiceState = []

const serviceSlice = createSlice({
   name: 'services',
   initialState,
   reducers: {
      setServices(_state, action: PayloadAction<ServiceState>) {
         return action.payload;
      },
   }
})

export const { setServices } = serviceSlice.actions
export const initializeServices = (): ThunkAction<void, RootState, void, PayloadAction<ServiceState>> => {
   return async dispatch => {
      try {
         const services = await getServices();
         dispatch(setServices(services ?? []));
      } catch (error) {
         console.error("Error initializing rooms:", error);
      }
   }
}
export default serviceSlice.reducer

