import { PayloadAction, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Catering } from "../../types/catering";
import { getCatering, getCateringClientId } from "../../services/catering";


type CateringState = Array<Catering>
const initialState: CateringState = []

const cateringSlice = createSlice({
   name: 'catering',
   initialState,
   reducers: {
      setCatering(_state, action: PayloadAction<CateringState>) {
         return action.payload;
      },
   }
})

export const { setCatering } = cateringSlice.actions

export const initializeCatering = (): ThunkAction<void, RootState, void, PayloadAction<CateringState>> => {
   return async dispatch => {
      try {
         const catering = await getCatering();
         dispatch(setCatering(catering ?? []));
      } catch (error) {
         console.error("Error initializing catering:", error);
      }
   }
}

export const handleCateringClient = (id: string): ThunkAction<void, RootState, void, PayloadAction<CateringState>> => {
   return async distpach => {
      try {
         const caterings = await getCateringClientId(id);
         distpach(setCatering(caterings ?? []));
      } catch (error) {
         console.error("Error initializing cateringId:", error);
      }
   }
}

export default cateringSlice.reducer