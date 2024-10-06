import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Fetches data from the provided URL and returns it as an object.
 * Handles potential errors during the fetch operation.
 *
 * @async
 * @function getInfoCV
 * @param {string} url The URL to fetch data from. Defaults to 'https://helloworld-r6j7e72owq-uc.a.run.app'.
 * @return {Promise<Object>} The parsed JSON data from the URL.
 */
export const getInfoCV = createAsyncThunk(
  'get-info_cv',
  async (url = 'https://infocv-r6j7e72owq-uc.a.run.app/') => {
    try {console.log('ssssss');
      const response = await fetch(url);
        
      // Ensure response is successful (status code in the 2xx range)
      if (!response.ok) {
        throw new Error(`Error fetching data 1: ${response.status}`);
      }
      const data = await response.json(); // Parse the response as JSON\
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data 2:', error); // Log the error for debugging
      throw error; // Re-throw the error to trigger the rejected state in Redux
    }
  }
);