import { createSlice } from "@reduxjs/toolkit"
import { getProyectos } from "../helpers/getters";

const initialState = {
        state: "loading",
        data: []
}

const proyectosSlice = createSlice({
  name: '@proyectos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(getProyectos.pending,(state) => {
            state.state = "loading"
            state.data = [];
        })
        builder.addCase(getProyectos.fulfilled,(state,action) => {
            state.state = "success"
            state.data = action.payload;
        })
        builder.addCase(getProyectos.rejected,(state,action) => {
            state.state = "failed"
            console.log(action.payload)
            state.data = [];
        })
      },
});

//export const {} = proyectosSlice.actions

export default proyectosSlice.reducer
