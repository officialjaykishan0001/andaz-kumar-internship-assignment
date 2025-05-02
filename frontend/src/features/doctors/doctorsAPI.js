import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


export const fetchDoctors = async (filters) => {
  const queryParams = new URLSearchParams(filters).toString();
  const response = await axios.get(`${API_BASE_URL}/list-doctor-with-filter?${queryParams}`);
  return response.data;
};
