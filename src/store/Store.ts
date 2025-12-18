import { configureStore } from "@reduxjs/toolkit";
import readyReducer from './ready/readySlice'

export const store = configureStore({
    reducer: { ready: readyReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch