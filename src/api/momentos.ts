import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

export interface PostPayload {
  content: string;
  category_id?: number;
  content_type?: 'text' | 'image' | 'video' | 'link';
  media_file?: File;
  link_url?: string;
  is_public?: boolean;
}

export const listPosts = async () => {
  const token = localStorage.getItem('access_token');
  const headers: Record<string, string> = token ? { Authorization: `Bearer ${token}` } : {};
  const res = await axios.get(`${BASE_URL}/api/v1/momentos/posts/`, { headers });
  return res.data;
};

export const createPost = async (data: PostPayload) => {
  const token = localStorage.getItem('access_token');
  const headers: Record<string, string> = token ? { Authorization: `Bearer ${token}` } : {};

  if (data.media_file) {
    const form = new FormData();
    Object.entries(data).forEach(([k, v]) => {
      if (v !== undefined && v !== null) form.append(k, v as any);
    });
    const res = await axios.post(`${BASE_URL}/api/v1/momentos/posts/`, form, { headers });
    return res.data;
  }
  const res = await axios.post(`${BASE_URL}/api/v1/momentos/posts/`, data, { headers });
  return res.data;
};

export const listHashtags = async () => {
  const token = localStorage.getItem('access_token');
  const headers: Record<string, string> = token ? { Authorization: `Bearer ${token}` } : {};
  const res = await axios.get(`${BASE_URL}/api/v1/momentos/hashtags/`, { headers });
  return res.data;
};

export const listComments = async (postId: number) => {
  const res = await axios.get(`${BASE_URL}/api/v1/momentos/posts/${postId}/comments/`);
  return res.data;
};

export const addComment = async (postId: number, content: string) => {
  const token = localStorage.getItem('access_token');
  const headers: Record<string, string> = token ? { Authorization: `Bearer ${token}` } : {};
  const res = await axios.post(`${BASE_URL}/api/v1/momentos/posts/${postId}/comments/`, { content }, { headers });
  return res.data;
};

export const reactLike = async (postId: number) => {
  const token = localStorage.getItem('access_token');
  const headers: Record<string, string> = token ? { Authorization: `Bearer ${token}` } : {};
  const res = await axios.post(`${BASE_URL}/api/v1/momentos/posts/${postId}/likes/`, {}, { headers });
  return res.data;
};


