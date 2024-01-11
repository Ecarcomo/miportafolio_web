import { configureStore } from "@reduxjs/toolkit";
import infoCVSlice from "./infoCVSlice";
//import webservices from "./webservicesSlice";
import configSlice from "./configSlice";

export const store = configureStore({
  reducer: {
    info_cv: infoCVSlice,
    //webservices: webservicesSlice,
    config:configSlice
  },
});


