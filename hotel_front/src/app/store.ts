import { configureStore } from "@reduxjs/toolkit";

import roomSlice from '../reducer/room/room'

const store = configureStore({
   reducer: {
      rooms: roomSlice,
   }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store