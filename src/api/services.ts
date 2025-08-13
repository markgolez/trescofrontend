import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

export const fetchServices = async () => {
  const token = localStorage.getItem('access_token');
  const response = await axios.get(`${BASE_URL}/api/v1/services/`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return response.data;
};