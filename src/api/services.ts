import { Service, ServiceBooking, ServiceImage, ServicePackage, ServiceReview, ServiceProviderProfile } from './../types/api/offered_services/index';
import { useIsAuthenticated } from './../hooks/useIsAuthenticated';
import { Order } from './../types/api/order/index';
import axios from 'axios';
// import { Provider } from 'react-redux';  

const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};


export const fetchServices = async () => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchUserServices = async (userId: string) => {
  // First get the provider profile ID for this user
  const providerResponse = await axios.get(`${BASE_URL}/api/v1/services/providers/?user=${userId}`, {
    headers: getAuthHeaders(),
  });
  
  const providerId = providerResponse.data.results[0]?.id;
  
  if (!providerId) {
    return [];
  }
  
  const response = await axios.get(`${BASE_URL}/api/v1/services/?provider=${providerId}`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Categories
export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/categories/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchCategoryDetail = async (uuid: string) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/categories/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Service Types
export const fetchServiceTypes = async () => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/types/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchServiceTypeDetail = async (uuid: string) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/types/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchCategoryServiceTypes = async (uuid: string) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/categories/${uuid}/types/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};



export const createService = async (data: Service) => {
  const response = await axios.post(`${BASE_URL}/api/v1/services/`, data, {
    headers: getAuthHeaders(),
  }); 
  return response.data;
};

export const fetchServiceDetail = async (uuid: string) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const updateService = async (uuid: number, data: Service) => {
  const response = await axios.put(`${BASE_URL}/api/v1/services/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const partialUpdateService = async (uuid: number, data: Service) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/services/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const deleteService = async (uuid: number) => {
  const response = await axios.delete(`${BASE_URL}/api/v1/services/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchProviderServices = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/provider/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchCategoryServices = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/category/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// // Service Images
export const fetchServiceImages = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/${uuid}/images/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const createServiceImage = async (uuid: number, data: ServiceImage) => {
  const response = await axios.post(`${BASE_URL}/api/v1/services/${uuid}/images/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchServiceImageDetail = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/images/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const updateServiceImage = async (uuid: number, data: ServiceImage) => {
  const response = await axios.put(`${BASE_URL}/api/v1/services/images/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const partialUpdateServiceImage = async (uuid: number, data: ServiceImage) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/services/images/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const deleteServiceImage = async (uuid: number) => {
  const response = await axios.delete(`${BASE_URL}/api/v1/services/images/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Service Packages
export const fetchServicePackages = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/${uuid}/packages/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const createServicePackage = async (uuid: number, data: ServicePackage) => {
  const response = await axios.post(`${BASE_URL}/api/v1/services/${uuid}/packages/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchServicePackageDetail = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/packages/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const updateServicePackage = async (uuid: number, data: ServicePackage) => {
  const response = await axios.put(`${BASE_URL}/api/v1/services/packages/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const partialUpdateServicePackage = async (uuid: number, data: ServicePackage) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/services/packages/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const deleteServicePackage = async (uuid: number) => {
  const response = await axios.delete(`${BASE_URL}/api/v1/services/packages/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Orders/Bookings
export const fetchServiceBookings = async () => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/orders/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const createServiceBooking = async (data: ServiceBooking) => {
  const response = await axios.post(`${BASE_URL}/api/v1/services/orders/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchServiceBookingDetail = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/orders/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const updateServiceBooking = async (uuid: number, data: ServiceBooking) => {
  const response = await axios.put(`${BASE_URL}/api/v1/services/orders/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const partialUpdateServiceBooking = async (uuid: number, data: ServiceBooking) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/services/orders/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const acceptServiceBooking = async (uuid: number) => {
  const response = await axios.post(`${BASE_URL}/api/v1/services/orders/${uuid}/accept/`, {}, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const completeServiceBooking = async (uuid: number) => {
  const response = await axios.post(`${BASE_URL}/api/v1/services/orders/${uuid}/complete/`, {}, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// // Service-specific bookings
export const fetchServiceSpecificBookings = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/${uuid}/bookings/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const createServiceSpecificBooking = async (uuid: number, data: ServiceBooking) => {
  const response = await axios.post(`${BASE_URL}/api/v1/services/${uuid}/bookings/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchBookingDetail = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/bookings/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const updateBooking = async (uuid: number, data: ServiceBooking) => {
  const response = await axios.put(`${BASE_URL}/api/v1/services/bookings/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const partialUpdateBooking = async (uuid: number, data: ServiceBooking) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/services/bookings/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const deleteBooking = async (uuid: number) => {
  const response = await axios.delete(`${BASE_URL}/api/v1/services/bookings/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};


export const fetchOrderReview = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/orders/${uuid}/review/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const createOrderReview = async (uuid: number, data: ServiceReview) => {
  const response = await axios.post(`${BASE_URL}/api/v1/services/orders/${uuid}/review/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchReviewDetail = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/reviews/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const updateReview = async (uuid: number, data: ServiceReview) => {
  const response = await axios.put(`${BASE_URL}/api/v1/services/reviews/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const partialUpdateReview = async (uuid: number, data: ServiceReview) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/services/reviews/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const deleteReview = async (uuid: number) => {
  const response = await axios.delete(`${BASE_URL}/api/v1/services/reviews/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Provider Profiles
export const fetchProviders = async () => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/providers/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchProviderDetail = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/providers/${uuid}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const updateProvider = async (uuid: number, data: ServiceProviderProfile) => {
  const response = await axios.put(`${BASE_URL}/api/v1/services/providers/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const partialUpdateProvider = async (uuid: number, data: ServiceProviderProfile) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/services/providers/${uuid}/`, data, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchProviderServicesList = async (uuid: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/services/providers/${uuid}/services/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};


