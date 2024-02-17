import { PayloadAction, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { User } from "../../types/loginUser";
import loginServices from '../../services/login'


// Tipo del estado del slice
interface UserState {
   user: User | null;
}

// Estado inicial del slice
const initialState: UserState = {
   user: null
};

const userSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setUsers(_state, action: PayloadAction<any>) {
         console.log(action)
         return action.payload;
      },
   }
})

export const { setUsers } = userSlice.actions

export const getUserLogin = (id: string): ThunkAction<void, RootState, void, PayloadAction<User>> => {
   return async dispatch => {
      try {
         const user = await loginServices.getUserAutenticated(id);
         dispatch(setUsers(user));
      } catch (error) {
         console.error("Error initializing rooms:", error);
      }
   }
}
export default userSlice.reducer