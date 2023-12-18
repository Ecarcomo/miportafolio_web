import { createSlice } from "@reduxjs/toolkit"
import { getConocimientos } from "../helpers/getters";

const initialState = {
        state: "loading",
        data: []
}

const conocimientosSlice = createSlice({
  name: '@conocimientos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(getConocimientos.pending,(state) => {
            state.state = "loading"
            state.data = [];
        })
        builder.addCase(getConocimientos.fulfilled,(state,action) => {
            state.state = "success"
            state.data = action.payload;
        })
        builder.addCase(getConocimientos.rejected,(state,action) => {
            state.state = "failed"
            console.log(action.payload)
            state.data = [];
        })
      },
});

//export const {} = conocimientosSlice.actions

export default conocimientosSlice.reducer