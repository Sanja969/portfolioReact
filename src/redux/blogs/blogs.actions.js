/* eslint-disable import/prefer-default-export */
import { BLOGS_ACTION_TYPES } from './blogs.types';

export const fetchBlogsStart = () => (
  {
  type: BLOGS_ACTION_TYPES.FETCH_BLOGS_START,
})

export const fetchBlogsSuccess = (blogs) => ({
  type: BLOGS_ACTION_TYPES.FETCH_BLOGS_SUCCESS,
  payload: blogs,
})

export const fetchBlogsFailed = (error) => ({
  type: BLOGS_ACTION_TYPES.FETCH_BLOGS_FAILED,
  payload: error,
})