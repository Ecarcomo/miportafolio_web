import { createAsyncThunk } from '@reduxjs/toolkit';

import infoCV from '../data/infoCV';

//-----------------------------------------

export const getInfoCV = createAsyncThunk(
        'get-info_cv',
        async () => {
        try {
               
                        return infoCV;
               
        } catch (error) {
                throw Error('Error fetching data');
        }
});
