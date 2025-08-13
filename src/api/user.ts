import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

export const login = async (username: string, password: string) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  
  try {
    // Try with username first
    const response = await axios.post(`${BASE_URL}/api/v1/auth/jwt/create/`, {
      username,
      password,
    }, { headers });
    return response.data;
  } catch (error: any) {
    // If username fails, try with email
    if (error.response?.status === 400) {
      try {
        const emailResponse = await axios.post(`${BASE_URL}/api/v1/auth/jwt/create/`, {
          email: username, // Use the username field as email
          password,
        }, { headers });
        return emailResponse.data;
      } catch (emailError: any) {
        throw emailError;
      }
    }
    
    throw error;
  }
};

export const createUser = async (userData: {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
  [key: string]: any;
}) => {
  console.log('API: Making create user request to:', `${BASE_URL}/api/v1/auth/users/`);
  console.log('API: Request payload:', { ...userData, password: '***', re_password: '***' });
  
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/auth/users/`, userData, { headers });
    console.log('API: Create user response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('API: Create user request failed:', error);
    console.error('API: Error response:', error.response?.data);
    console.error('API: Error status:', error.response?.status);
    throw error;
  }
};

export const logout = async (refreshToken: string) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
  
  try {
    const response = await axios.post(`${BASE_URL}/api/v1/auth/jwt/logout/`, {
      refresh: refreshToken,
    }, { headers });
    return response.data;
  } catch (error: any) {
    console.error('API: Logout request failed:', error);
    // Don't throw error for logout - we still want to clear local storage
    return null;
  }
};

export const getCurrentUser = async (access: string) => {
  const headers = {
    'Authorization': `Bearer ${access}`,
    'Accept': 'application/json',
  };
  
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/auth/users/me/`, { headers });
    return response.data;
  } catch (error: any) {
    console.error('API: Get current user request failed:', error);
    console.error('API: Error response:', error.response?.data);
    console.error('API: Error status:', error.response?.status);
    throw error;
  }
}; 