/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectArticlesReducer = (state) => state.articles;

export const selectArticlesSuccess = createSelector(
  [selectArticlesReducer],
  (articlesSlice) => articlesSlice.articles,
);

export const getArticles = createSelector(
  [selectArticlesSuccess],
  (articles) => articles,
);

export const selectArticlesIsLoading = createSelector(
  [selectArticlesReducer],
  (articlesSlice) => articlesSlice.isLoading,
);