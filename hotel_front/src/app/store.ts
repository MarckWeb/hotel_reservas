import { configureStore } from "@reduxjs/toolkit";

import roomSlice from '../reducer/room/room'
import serviceSlice from '../reducer/service/service'
import userSlice from '../reducer/user/user'

const store = configureStore({
   reducer: {
      rooms: roomSlice,
      services: serviceSlice,
      user: userSlice
   }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store