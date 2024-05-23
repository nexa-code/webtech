// src/services/resultService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/results';

// Function to fetch all results
export const getResults = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch results');
  }
};

// Function to add a new result
export const addResult = async (result) => {
  try {
    const response = await axios.post(BASE_URL, result);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add result');
  }
};

// Function to search result by PRN
export const searchResultByPrn = async (prn) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/${prn}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to search result');
  }
};
