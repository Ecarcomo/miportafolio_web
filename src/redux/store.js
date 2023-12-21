import { configureStore } from "@reduxjs/toolkit";
import proyectosSlice from "./proyectosSlice";
import conocimientosSlice from "./conocimientosSlice";
//import estudios from "./estudiosSlice";
//import exp_laboral from "./exp_laboralSlice";
import info_generalSlice from "./info_generalSlice";
//import estudios from "./estudiosSlice";
//import webservices from "./webservicesSlice";
import configSlice from "./configSlice";

export const store = configureStore({
  reducer: {
    proyectos: proyectosSlice,
    conocimientos: conocimientosSlice,
    //estudios: estudiosSlice,
    //exp_laboral: exp_laboralSlice,
    info_general:info_generalSlice,
    //estudios: estudiosSlice,
    //webservices: webservicesSlice,
    config:configSlice
  },
});


