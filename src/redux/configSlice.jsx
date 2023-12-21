import { createSlice } from "@reduxjs/toolkit"


const initialState = {
        mode: "light",
}

const configSlice = createSlice({
  name: '@config',
  initialState,
  reducers: {
    toggleMode: (state) => {
        state.mode ==="light"? state.mode ="dark": state.mode ="light";
    }
  },
});

export const {toggleMode} = configSlice.actions

export default configSlice.reducer