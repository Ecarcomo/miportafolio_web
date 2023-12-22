import { createSlice } from "@reduxjs/toolkit"
import { getEducacionFormal } from "../helpers/getters";

const initialState = {
        state: "loading",
        data: []
}

const educacionFormalSlice = createSlice({
  name: '@educacion_formal',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(getEducacionFormal.pending,(state) => {
            state.state = "loading"
            state.data = [];
        })
        builder.addCase(getEducacionFormal.fulfilled,(state,action) => {
            state.state = "success"
            state.data = action.payload;
        })
        builder.addCase(getEducacionFormal.rejected,(state,action) => {
            state.state = "failed"
            console.log(action.payload)
            state.data = [];
        })
      },
});

//export const {} = educacionFormalSlice.actions

export default educacionFormalSlice.reducer