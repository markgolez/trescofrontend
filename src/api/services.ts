// import axios from 'axios';
// import { Service, ServiceBooking, ServiceImage, ServicePackage } from '../types/api/offered_services';
// import { Provider } from 'react-redux';

// const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

// const getAuthHeaders = () => {
//   const token = localStorage.getItem('access_token');
//   return token ? { Authorization: `Bearer ${token}` } : {};
// };

// // Categories
// export const fetchCategories = async () => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/categories/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchCategoryDetail = async (category_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/categories/${category_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// // Service Types
// export const fetchServiceTypes = async () => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/types/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchServiceTypeDetail = async (service_type_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/types/${service_type_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchCategoryServiceTypes = async (category_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/categories/${category_id}/types/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// // Services
// export const fetchServices = async () => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const createService = async (data: Service) => {
//   const response = await axios.post(`${BASE_URL}/api/v1/services/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchServiceDetail = async (service_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/${service_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const updateService = async (service_id: number, data: Service) => {
//   const response = await axios.put(`${BASE_URL}/api/v1/services/${service_id}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const partialUpdateService = async (service_id: number, data: Service) => {
//   const response = await axios.patch(`${BASE_URL}/api/v1/services/${service_id}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const deleteService = async (service_id: number) => {
//   const response = await axios.delete(`${BASE_URL}/api/v1/services/${service_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchProviderServices = async (provider_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/provider/${provider_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchCategoryServices = async (category_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/category/${category_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// // Service Images
// export const fetchServiceImages = async (service_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/${service_id}/images/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const createServiceImage = async (service_id: number, data: ServiceImage) => {
//   const response = await axios.post(`${BASE_URL}/api/v1/services/${service_id}/images/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchServiceImageDetail = async (image_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/images/${image_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const updateServiceImage = async (image_id: number, data: ServiceImage) => {
//   const response = await axios.put(`${BASE_URL}/api/v1/services/images/${image_id}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const partialUpdateServiceImage = async (image_id: number, data: ServiceImage) => {
//   const response = await axios.patch(`${BASE_URL}/api/v1/services/images/${image_id}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const deleteServiceImage = async (image_id: number) => {
//   const response = await axios.delete(`${BASE_URL}/api/v1/services/images/${image_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// // Service Packages
// export const fetchServicePackages = async (service_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/${service_id}/packages/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const createServicePackage = async (service_id: number, data: ServicePackage) => {
//   const response = await axios.post(`${BASE_URL}/api/v1/services/${service_id}/packages/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchServicePackageDetail = async (package_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/packages/${package_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const updateServicePackage = async (package_id: number, data: ServicePackage) => {
//   const response = await axios.put(`${BASE_URL}/api/v1/services/packages/${package_id}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const partialUpdateServicePackage = async (package_id: number, data: ServicePackage) => {
//   const response = await axios.patch(`${BASE_URL}/api/v1/services/packages/${package_id}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const deleteServicePackage = async (package_id: number) => {
//   const response = await axios.delete(`${BASE_URL}/api/v1/services/packages/${package_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// // Orders/Bookings
// export const fetchServiceBookings = async () => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/orders/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const createServiceBooking = async (data: ServiceBooking) => {
//   const response = await axios.post(`${BASE_URL}/api/v1/services/orders/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchServiceBookingDetail = async (booking_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/orders/${booking_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const updateServiceBooking = async (booking_id: number, data: ServiceBooking) => {
//   const response = await axios.put(`${BASE_URL}/api/v1/services/orders/${booking_id}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const partialUpdateServiceBooking = async (booking_id: number, data: ServiceBooking) => {
//   const response = await axios.patch(`${BASE_URL}/api/v1/services/orders/${booking_id}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const acceptServiceBooking = async (booking_id: number) => {
//   const response = await axios.post(`${BASE_URL}/api/v1/services/orders/${booking_id}/accept/`, {}, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const completeServiceBooking = async (pk) => {
//   const response = await axios.post(`${BASE_URL}/api/v1/services/orders/${pk}/complete/`, {}, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// // Service-specific bookings
// export const fetchServiceSpecificBookings = async (service_id) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/${service_id}/bookings/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const createServiceSpecificBooking = async (service_id, data) => {
//   const response = await axios.post(`${BASE_URL}/api/v1/services/${service_id}/bookings/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchBookingDetail = async (pk) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/bookings/${pk}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const updateBooking = async (pk, data) => {
//   const response = await axios.put(`${BASE_URL}/api/v1/services/bookings/${pk}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const partialUpdateBooking = async (pk, data) => {
//   const response = await axios.patch(`${BASE_URL}/api/v1/services/bookings/${pk}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const deleteBooking = async (pk) => {
//   const response = await axios.delete(`${BASE_URL}/api/v1/services/bookings/${pk}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// // Reviews
// export const fetchOrderReview = async (order_id) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/orders/${order_id}/review/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const createOrderReview = async (order_id, data) => {
//   const response = await axios.post(`${BASE_URL}/api/v1/services/orders/${order_id}/review/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchReviewDetail = async (pk) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/reviews/${pk}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const updateReview = async (pk, data) => {
//   const response = await axios.put(`${BASE_URL}/api/v1/services/reviews/${pk}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const partialUpdateReview = async (pk, data) => {
//   const response = await axios.patch(`${BASE_URL}/api/v1/services/reviews/${pk}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const deleteReview = async (pk) => {
//   const response = await axios.delete(`${BASE_URL}/api/v1/services/reviews/${pk}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// // Provider Profiles
// export const fetchProviders = async () => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/providers/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchProviderDetail = async (provider_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/providers/${provider_id}/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const updateProvider = async (provider_id: number, data: Provider) => {
//   const response = await axios.put(`${BASE_URL}/api/v1/services/providers/${provider_id}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const partialUpdateProvider = async (provider_id: number, data: Provider) => {
//   const response = await axios.patch(`${BASE_URL}/api/v1/services/providers/${provider_id}/`, data, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };

// export const fetchProviderServicesList = async (provider_id: number) => {
//   const response = await axios.get(`${BASE_URL}/api/v1/services/providers/${provider_id}/services/`, {
//     headers: getAuthHeaders(),
//   });
//   return response.data;
// };


import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

export const fetchServices = async () => {
  const token = localStorage.getItem('access_token');
  const response = await axios.get(`${BASE_URL}/api/v1/services/`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return response.data;
};