import { PayloadAction, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { User } from "../../types/loginUser";
import loginServices from '../../services/login'


type UserState = Array<User>
const initialState: UserState = []


const userSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setUsers(_state, action: PayloadAction<UserState>) {
         return action.payload;
      },
   }
})

export const { setUsers } = userSlice.actions

export const getUserLogin = (id: string): ThunkAction<void, RootState, void, PayloadAction<UserState>> => {
   return async distpach => {
      try {
         const user = await loginServices.getUserId(id);
         distpach(setUsers([user]));
      } catch (error) {
         console.error("Error initializing userId:", error);
      }
   }
}

export default userSlice.reducer