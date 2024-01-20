import { createAsyncThunk } from '@reduxjs/toolkit';

import infoCV from '../data/infoCV';

/**
 * Obtiene DATA de archivo infoCV.json
 *
 * @async
 * @function getInfoCV
 * @return {Promise<Object>} The data from the URL.
 */
export const getInfoCV = createAsyncThunk(
        'get-info_cv',
        async () => {
        try {
               
                        return infoCV;
               
        } catch (error) {
                throw Error('Error fetching data');
        }
});
