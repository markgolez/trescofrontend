import {AppDispatch} from '../types';
import * as servicesApi from '../api/services';

export const fetchServices = () => async (dispatch: AppDispatch) => {
  try {
    const services = await servicesApi.fetchServices();
    return services;
  } catch (error: any) {
    console.error('Fetch services error:', error);
    throw error;
  }
}; 