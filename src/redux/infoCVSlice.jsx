import { createSlice } from "@reduxjs/toolkit"
import { getInfoCV } from "../helpers/getters";

const initialState = {
        state: "loading",
        data: []
}

const infoCVSlice = createSlice({
  name: '@conocimientos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(getInfoCV.pending,(state) => {
            state.state = "loading"
            state.data = [];
        })
        builder.addCase(getInfoCV.fulfilled,(state,action) => {
            state.state = "success"
            state.data = action.payload;
        })
        builder.addCase(getInfoCV.rejected,(state,action) => {
            state.state = "failed"
            console.log(action.payload)
            state.data = [];
        })
      },
});

//export const {} = infoCVSlice.actions

export default infoCVSlice.reducer