import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ReadyState = {
  ready: boolean;
};

const initialState: ReadyState = {
  ready: false,
};

const readySlice = createSlice({
    name: "ready",
    initialState,
    reducers: {
        setReady(state, action: PayloadAction<boolean>) {
            state.ready = action.payload
        }
    }
})

export const {setReady} = readySlice.actions;
export default readySlice.reducer;