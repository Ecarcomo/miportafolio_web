import { configureStore } from "@reduxjs/toolkit";
import proyectosSlice from "./proyectosSlice";
import conocimientosSlice from "./conocimientosSlice";
//import estudios from "./estudiosSlice";
//import exp_laboral from "./exp_laboralSlice";
//import info_personal from "./info_personalSlice";
//import estudios from "./estudiosSlice";
//import webservices from "./webservicesSlice";

export const store = configureStore({
  reducer: {
    proyectos: proyectosSlice,
    conocimientos: conocimientosSlice,
    //estudios: estudiosSlice,
    //exp_laboral: exp_laboralSlice,
    //info_personal:info_personalSlice,
    //estudios: estudiosSlice,
    //webservices: webservicesSlice,
  },
});


