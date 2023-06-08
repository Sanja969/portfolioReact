/* eslint-disable import/prefer-default-export */
import { ARTICLES_ACTION_TYPES } from './articles.types';

export const fetchArticlesStart = () => (
  {
  type: ARTICLES_ACTION_TYPES.FETCH_ARTICLES_START,
})

export const fetchArticlesSuccess = (articles) => ({
  type: ARTICLES_ACTION_TYPES.FETCH_ARTICLES_SUCCESS,
  payload: articles,
})

export const fetchArticlesFailed = (error) => ({
  type: ARTICLES_ACTION_TYPES.FETCH_ARTICLES_FAILED,
  payload: error,
})