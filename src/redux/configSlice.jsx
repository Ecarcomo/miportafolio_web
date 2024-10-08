import { createSlice } from "@reduxjs/toolkit"


const initialState = {
        mode: "light",
        bg_color:"white",
        language:"espaniol"
}

const configSlice = createSlice({
  name: '@config',
  initialState,
  reducers: {
    toggleMode: (state) => {
        state.mode ==="light"? state.mode ="dark": state.mode ="light";
        state.bg_color ==="white"? state.bg_color ="black": state.bg_color ="white";
    },
    toggleLanguage: (state) => {
      state.language ==="espaniol"? state.language ="english": state.language ="espaniol";
    }
  },
});

export const {toggleMode, toggleLanguage} = configSlice.actions

export default configSlice.reducer