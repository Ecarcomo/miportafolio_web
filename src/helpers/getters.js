import { createAsyncThunk } from '@reduxjs/toolkit';

import infoCV from '../data/infoCV';

export const getProyectos = createAsyncThunk(
        'get-proyectos',
        async () => {
        try {
                // Puedes usar la información del archivo JSON directamente
                // O realizar cualquier procesamiento necesario aquí
                return infoCV.proyectos;
        } catch (error) {
                throw Error('Error fetching data');
        }
});

export const getConocimientos = createAsyncThunk(
        'get-conocimientos',
        async () => {
        try {
                // Puedes usar la información del archivo JSON directamente
                // O realizar cualquier procesamiento necesario aquí
                return infoCV.conocimientos;
        } catch (error) {
                throw Error('Error fetching data');
        }
});
      


