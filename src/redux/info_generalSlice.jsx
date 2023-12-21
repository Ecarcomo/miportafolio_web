import { createSlice } from "@reduxjs/toolkit"
import { getInfoGeneral } from "../helpers/getters";

const initialState = {
        state: "loading",
        data: []
}

const info_generalSlice = createSlice({
  name: '@info_general',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(getInfoGeneral.pending,(state) => {
            state.state = "loading"
            state.data = [];
        })
        builder.addCase(getInfoGeneral.fulfilled,(state,action) => {
            state.state = "success"
            state.data = action.payload;
        })
        builder.addCase(getInfoGeneral.rejected,(state,action) => {
            state.state = "failed"
            console.log(action.payload)
            state.data = [];
        })
      },
});

//export const {} = conocimientosSlice.actions

export default info_generalSlice.reducer