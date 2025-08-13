import axios from 'axios';
import {AppDispatch} from '../types';
import {setUser} from '../store';
import * as userApi from '../api/user';

export const registerUser = (values: { 
  username: string; 
  first_name: string; 
  last_name: string; 
  email: string; 
  password: string; 
  re_password: string; 
}) => async (dispatch: AppDispatch) => {
  console.log('Dispatcher: registerUser called with values:', values);
  try {
    console.log('Dispatcher: Calling userApi.createUser...');
    const userData = await userApi.createUser(values);
    console.log('Dispatcher: userApi.createUser completed, userData:', userData);
    localStorage.setItem('user', JSON.stringify(userData));
    dispatch(setUser(userData));
    console.log('Dispatcher: registerUser completed successfully');
    return userData;
  
  } catch (error: any) {
    console.error('Dispatcher: Create user error:', error);
    throw error;
  }
};

// Backward compatibility: export createUser as alias for registerUser
export const createUser = registerUser;