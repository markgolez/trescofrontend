import axios from 'axios';
import {AppDispatch} from '../types';
import {setUser} from '../store';
import * as userApi from '../api/user';

export const login = (values: {username: string; password: string}) => async (dispatch: AppDispatch) => {
  try {
    // 1. Get tokens
    const { access, refresh } = await userApi.login(values.username, values.password);
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);

    // 2. Fetch user info
    const user = await userApi.getCurrentUser(access);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(setUser(user));
    
    return user;
  } catch (error: any) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    // Get refresh token from localStorage
    const refreshToken = localStorage.getItem('refresh_token');
    
    // Call backend logout endpoint if we have a refresh token
    if (refreshToken) {
      await userApi.logout(refreshToken);
    }
  } catch (error) {
    console.error('Logout error:', error);
    // Continue with logout even if backend call fails
  } finally {
    // Clear local storage and state
    localStorage.removeItem('user');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    dispatch(setUser(null));
  }
};

export const refreshToken = () => async () => {
  const refresh = localStorage.getItem('refresh_token');
  if (!refresh) throw new Error('No refresh token');
  // You may want to implement token refresh logic here
  return refresh;
}; 