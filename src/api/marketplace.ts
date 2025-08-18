import axios from 'axios';
import { Product, ProductImage } from '../types/api/marketplace';
import { Order } from '../types/api/order';
import { Review } from '../types/api/review';
import { SellerProfile } from '../types/api/marketplace';  

const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

// Helper function to get headers with token if available
const getHeaders = () => {
  const token = localStorage.getItem('access_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Categories API
export const fetchCategories = async () => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/categories/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const fetchCategoryDetail = async (category_id: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/categories/${category_id}/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const fetchCategoryProducts = async (category_id: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/categories/${category_id}/products/`, {
    headers: getHeaders()
  });
  return response.data;
};

// Products API
export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/products/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const createProduct = async (productData: Product) => {
  const response = await axios.post(`${BASE_URL}/api/v1/marketplace/products/`, productData, {
    headers: getHeaders()
  });
  return response.data;
};

export const fetchProductDetail = async (product_id: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/products/${product_id}/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const updateProduct = async (product_id: number, productData: Product) => {
  const response = await axios.put(`${BASE_URL}/api/v1/marketplace/products/${product_id}/`, productData, {
    headers: getHeaders()
  });
  return response.data;
};

export const partialUpdateProduct = async (product_id: number, productData: Product) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/marketplace/products/${product_id}/`, productData, {
    headers: getHeaders()
  });
  return response.data;
};

export const deleteProduct = async (product_id: number) => {
  const response = await axios.delete(`${BASE_URL}/api/v1/marketplace/products/${product_id}/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const fetchSellerProducts = async (seller_id: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/seller/${seller_id}/products/`, {
    headers: getHeaders()
  });
  return response.data;
};

// Product Images API
export const fetchProductImages = async (product_id: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/products/${product_id}/images/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const createProductImage = async (product_id: number, imageData: ProductImage) => {
  const response = await axios.post(`${BASE_URL}/api/v1/marketplace/products/${product_id}/images/`, imageData, {
    headers: getHeaders()
  });
  return response.data;
};

export const fetchProductImageDetail = async (image_id: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/images/${image_id}/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const updateProductImage = async (image_id: number, imageData: ProductImage) => {
  const response = await axios.put(`${BASE_URL}/api/v1/marketplace/images/${image_id}/`, imageData, {
    headers: getHeaders()
  });
  return response.data;
};

export const partialUpdateProductImage = async (image_id: number, imageData: ProductImage) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/marketplace/images/${image_id}/`, imageData, {
    headers: getHeaders()
  });
  return response.data;
};

export const deleteProductImage = async (image_id: number) => {
  const response = await axios.delete(`${BASE_URL}/api/v1/marketplace/images/${image_id}/`, {
    headers: getHeaders()
  });
  return response.data;
};

// Orders API
export const fetchOrders = async () => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/orders/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const createOrder = async (orderData: Order) => {
  const response = await axios.post(`${BASE_URL}/api/v1/marketplace/orders/`, orderData, {
    headers: getHeaders()
  });
  return response.data;
};

export const fetchOrderDetail = async (order_id: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/orders/${order_id}/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const updateOrder = async (order_id: number, orderData: Order) => {
  const response = await axios.put(`${BASE_URL}/api/v1/marketplace/orders/${order_id}/`, orderData, {
    headers: getHeaders()
  });
  return response.data;
};

export const partialUpdateOrder = async (order_id: number, orderData: Order) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/marketplace/orders/${order_id}/`, orderData, {
    headers: getHeaders()
  });
  return response.data;
};

export const confirmOrder = async (order_id: number) => {
  const response = await axios.post(`${BASE_URL}/api/v1/marketplace/orders/${order_id}/confirm/`, {}, {
    headers: getHeaders()
  });
  return response.data;
};

export const shipOrder = async (order_id: number) => {
  const response = await axios.post(`${BASE_URL}/api/v1/marketplace/orders/${order_id}/ship/`, {}, {
    headers: getHeaders()
  });
  return response.data;
};

export const deliverOrder = async (order_id: number) => {
  const response = await axios.post(`${BASE_URL}/api/v1/marketplace/orders/${order_id}/deliver/`, {}, {
    headers: getHeaders()
  });
  return response.data;
};

// Reviews API
export const fetchOrderReview = async (order_id: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/orders/${order_id}/review/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const createOrderReview = async (order_id: number, reviewData: Review) => {
  const response = await axios.post(`${BASE_URL}/api/v1/marketplace/orders/${order_id}/review/`, reviewData, {
    headers: getHeaders()
  });
  return response.data;
};

export const fetchReviewDetail = async (review_id: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/reviews/${review_id}/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const updateReview = async (review_id: number, reviewData: Review) => {
  const response = await axios.put(`${BASE_URL}/api/v1/marketplace/reviews/${review_id}/`, reviewData, {
    headers: getHeaders()
  });
  return response.data;
};

export const partialUpdateReview = async (review_id: number, reviewData: Review) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/marketplace/reviews/${review_id}/`, reviewData, {
    headers: getHeaders()
  });
  return response.data;
};

export const deleteReview = async (review_id: number) => {
  const response = await axios.delete(`${BASE_URL}/api/v1/marketplace/reviews/${review_id}/`, {
    headers: getHeaders()
  });
  return response.data;
};

// Seller Profiles API
export const fetchSellers = async () => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/sellers/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const fetchSellerDetail = async (seller_id: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/sellers/${seller_id}/`, {
    headers: getHeaders()
  });
  return response.data;
};

export const updateSeller = async (seller_id: number, sellerData: SellerProfile) => {
  const response = await axios.put(`${BASE_URL}/api/v1/marketplace/sellers/${seller_id}/`, sellerData, {
    headers: getHeaders()
  });
  return response.data;
};

export const partialUpdateSeller = async (seller_id: number, sellerData: SellerProfile) => {
  const response = await axios.patch(`${BASE_URL}/api/v1/marketplace/sellers/${seller_id}/`, sellerData, {
    headers: getHeaders()
  });
  return response.data;
};

export const fetchSellerProductsList = async (seller_id: number) => {
  const response = await axios.get(`${BASE_URL}/api/v1/marketplace/sellers/${seller_id}/products/`, {
    headers: getHeaders()
  });
  return response.data;
};