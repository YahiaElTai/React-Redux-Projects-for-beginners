import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=yahianewkey';

export const fetchPostsAPI = () => {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  return axios.get(url);
};

export const createPostAPI = props => {
  const url = `${ROOT_URL}/posts${API_KEY}`;
  return axios.post(url, props);
};

export const fetchPostAPI = id => {
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  return axios.get(url);
};

export const deletePostAPI = id => {
  const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
  return axios.delete(url);
};
