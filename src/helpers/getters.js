import { createAsyncThunk } from '@reduxjs/toolkit';

import infoCV from '../data/infoCV';


export const getProyectos = createAsyncThunk(
        'get-proyectos',
        async (lang) => {
        try {
                if(lang === "español"){
                        return infoCV.español.proyectos;
                }
                return infoCV.english.projects;
        } catch (error) {
                throw Error('Error fetching data');
        }
});

export const getConocimientos = createAsyncThunk(
        'get-conocimientos',
        async (lang) => {
        try {
                if(lang === "español"){
                        return infoCV.español.conocimientos;
                }
                return infoCV.english.skills;
        } catch (error) {
                throw Error('Error fetching data');
        }
});

export const getInfoGeneral = createAsyncThunk(
        'get-info_general',
        async (lang) => {
        try {
                if(lang === "español"){
                        return infoCV.español.info_general;
                }
                return infoCV.english.general_info;
        } catch (error) {
                throw Error('Error fetching data');
        }
});

export const getEducacionFormal = createAsyncThunk(
        'get-educacion_formal',
        async (lang) => {
        try {
                if(lang === "español"){
                        return infoCV.español.educacion_formal;
                }
                return infoCV.english.formal_education;
        } catch (error) {
                throw Error('Error fetching data');
        }
});

export const getExpLaboral = createAsyncThunk(
        'get-exp_laboral',
        async (lang) => {
        try {
                if(lang === "español"){
                        return infoCV.español.exp_laboral;
                }
                return infoCV.english.work_experience;
        } catch (error) {
                throw Error('Error fetching data');
        }
});
