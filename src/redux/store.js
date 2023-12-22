import { configureStore } from "@reduxjs/toolkit";
import proyectosSlice from "./proyectosSlice";
import conocimientosSlice from "./conocimientosSlice";
import exp_laboralSlice from "./exp_laboralSlice";
import info_generalSlice from "./info_generalSlice";
import educacionFormalSlice from "./educacionFormalSlice";
//import webservices from "./webservicesSlice";
import configSlice from "./configSlice";

export const store = configureStore({
  reducer: {
    proyectos: proyectosSlice,
    conocimientos: conocimientosSlice,
    exp_laboral: exp_laboralSlice,
    info_general:info_generalSlice,
    estudios_formales: educacionFormalSlice,
    //webservices: webservicesSlice,
    config:configSlice
  },
});


