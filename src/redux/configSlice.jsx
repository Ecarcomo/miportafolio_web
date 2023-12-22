import { createSlice } from "@reduxjs/toolkit"


const initialState = {
        mode: "light",
        bg_color:"white"
}

const configSlice = createSlice({
  name: '@config',
  initialState,
  reducers: {
    toggleMode: (state) => {
        state.mode ==="light"? state.mode ="dark": state.mode ="light";
        state.bg_color ==="white"? state.bg_color ="black": state.bg_color ="white";
    }
  },
});

export const {toggleMode} = configSlice.actions

export default configSlice.reducer