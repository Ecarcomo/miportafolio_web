import { createSlice } from "@reduxjs/toolkit"
import { getExpLaboral } from "../helpers/getters";

const initialState = {
        state: "loading",
        data: []
}

const exp_laboralSlice = createSlice({
  name: '@exp_laboral',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(getExpLaboral.pending,(state) => {
            state.state = "loading"
            state.data = [];
        })
        builder.addCase(getExpLaboral.fulfilled,(state,action) => {
            state.state = "success"
            state.data = action.payload;
        })
        builder.addCase(getExpLaboral.rejected,(state,action) => {
            state.state = "failed"
            console.log(action.payload)
            state.data = [];
        })
      },
});

//export const {} = exp_laboralSlice.actions

export default exp_laboralSlice.reducer