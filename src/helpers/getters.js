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

export const getInfoGeneral = createAsyncThunk(
        'get-info_general',
        async () => {
        try {
                // Puedes usar la información del archivo JSON directamente
                // O realizar cualquier procesamiento necesario aquí
                return infoCV.info_general;
        } catch (error) {
                throw Error('Error fetching data');
        }
});

export const getEducacionFormal = createAsyncThunk(
        'get-educacion_formal',
        async () => {
        try {
                // Puedes usar la información del archivo JSON directamente
                // O realizar cualquier procesamiento necesario aquí
                return infoCV.educacion_formal;
        } catch (error) {
                throw Error('Error fetching data');
        }
});

export const getExpLaboral = createAsyncThunk(
        'get-exp_laboral',
        async () => {
        try {
                // Puedes usar la información del archivo JSON directamente
                // O realizar cualquier procesamiento necesario aquí
                return infoCV.exp_laboral;
        } catch (error) {
                throw Error('Error fetching data');
        }
});
