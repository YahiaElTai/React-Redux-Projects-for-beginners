import { FETCH_POST, CREATE_POST, FETCH_POSTS, DELETE_POST } from './types';
import {
  fetchPostsAPI,
  createPostAPI,
  fetchPostAPI,
  deletePostAPI,
} from '../api';

export const fetchPosts = async () => ({
  type: FETCH_POSTS,
  payload: await fetchPostsAPI(),
});

export const createPost = async props => ({
  type: CREATE_POST,
  payload: await createPostAPI(props),
});

export const fetchPost = async id => ({
  type: FETCH_POST,
  payload: await fetchPostAPI(id),
});

export const deletePost = async id => ({
  type: DELETE_POST,
  payload: await deletePostAPI(id),
});
