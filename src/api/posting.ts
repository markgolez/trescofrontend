import axios from "axios";
import {
  Posting,
  PostingCategory,
  PostingImage,
  Bid,
  Negotiation,
  NegotiationMessage,
  PostingFavorite,
  Proposal,
  PostingTag,
  PostingTagRelation,
  PostingView,
  Postings
} from '../types/api/posting';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Posting endpoints
export const fetchPostings = async (): Promise<Posting[]> => {
  const response = await axios.get(`${BASE_URL}/api/v1/posting/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchPosting = async (id: number): Promise<Posting> => {
  const response = await axios.get(`${BASE_URL}/api/v1/posting/${id}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const createPosting = async (postingData: Partial<Posting>): Promise<Posting> => {
  const response = await axios.post(`${BASE_URL}/api/v1/posting/`, postingData, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const updatePosting = async (id: number, postingData: Partial<Posting>): Promise<Posting> => {
  const response = await axios.put(`${BASE_URL}/api/v1/posting/${id}/`, postingData, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const patchPosting = async (id: number, postingData: Partial<Posting>): Promise<Posting> => {
  const response = await axios.patch(`${BASE_URL}/api/v1/posting/${id}/`, postingData, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const deletePosting = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/api/v1/posting/${id}/`, {
    headers: getAuthHeaders(),
  });
};

// Bid endpoints
export const fetchPostingBids = async (postingId: number): Promise<Bid[]> => {
  const response = await axios.get(`${BASE_URL}/api/v1/posting/${postingId}/bids/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const createBid = async (postingId: number, bidData: Partial<Bid>): Promise<Bid> => {
  const response = await axios.post(`${BASE_URL}/api/v1/posting/${postingId}/bids/`, bidData, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchBid = async (id: number): Promise<Bid> => {
  const response = await axios.get(`${BASE_URL}/api/v1/posting/bids/${id}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const updateBid = async (id: number, bidData: Partial<Bid>): Promise<Bid> => {
  const response = await axios.put(`${BASE_URL}/api/v1/posting/bids/${id}/`, bidData, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const patchBid = async (id: number, bidData: Partial<Bid>): Promise<Bid> => {
  const response = await axios.patch(`${BASE_URL}/api/v1/posting/bids/${id}/`, bidData, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const deleteBid = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/api/v1/posting/bids/${id}/`, {
    headers: getAuthHeaders(),
  });
};

export const acceptBid = async (id: number): Promise<Bid> => {
  const response = await axios.post(`${BASE_URL}/api/v1/posting/bids/${id}/accept/`, {}, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const rejectBid = async (id: number): Promise<Bid> => {
  const response = await axios.post(`${BASE_URL}/api/v1/posting/bids/${id}/reject/`, {}, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchUserBids = async (): Promise<Bid[]> => {
  const response = await axios.get(`${BASE_URL}/api/v1/posting/user/bids/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Negotiation endpoints
export const fetchBidNegotiations = async (bidId: number): Promise<Negotiation[]> => {
  const response = await axios.get(`${BASE_URL}/api/v1/posting/bids/${bidId}/negotiations/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const createNegotiation = async (bidId: number, negotiationData: Partial<Negotiation>): Promise<Negotiation> => {
  const response = await axios.post(`${BASE_URL}/api/v1/posting/bids/${bidId}/negotiations/`, negotiationData, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchNegotiation = async (id: number): Promise<Negotiation> => {
  const response = await axios.get(`${BASE_URL}/api/v1/posting/negotiations/${id}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const updateNegotiation = async (id: number, negotiationData: Partial<Negotiation>): Promise<Negotiation> => {
  const response = await axios.put(`${BASE_URL}/api/v1/posting/negotiations/${id}/`, negotiationData, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const patchNegotiation = async (id: number, negotiationData: Partial<Negotiation>): Promise<Negotiation> => {
  const response = await axios.patch(`${BASE_URL}/api/v1/posting/negotiations/${id}/`, negotiationData, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const deleteNegotiation = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/api/v1/posting/negotiations/${id}/`, {
    headers: getAuthHeaders(),
  });
};

// Category endpoints
export const fetchCategories = async (): Promise<PostingCategory[]> => {
  const response = await axios.get(`${BASE_URL}/api/v1/posting/categories/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const fetchCategory = async (id: number): Promise<PostingCategory> => {
  const response = await axios.get(`${BASE_URL}/api/v1/posting/categories/${id}/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Favorite endpoints
export const fetchPostingFavorites = async (postingId: number): Promise<PostingFavorite[]> => {
  const response = await axios.get(`${BASE_URL}/api/v1/posting/${postingId}/favorites/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const addToFavorites = async (postingId: number): Promise<PostingFavorite> => {
  const response = await axios.post(`${BASE_URL}/api/v1/posting/${postingId}/favorites/`, {}, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

export const removeFromFavorites = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/api/v1/posting/favorites/${id}/`, {
    headers: getAuthHeaders(),
  });
};

export const fetchUserFavorites = async (): Promise<PostingFavorite[]> => {
  const response = await axios.get(`${BASE_URL}/api/v1/posting/user/favorites/`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

// Utility function for handling API errors
export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || error.message || 'An error occurred';
  }
  return 'An unexpected error occurred';
};