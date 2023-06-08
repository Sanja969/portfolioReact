/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectProjectsReducer = (state) => state.projects;

export const selectProjectsSuccess = createSelector(
  [selectProjectsReducer],
  (projectsSlice) => projectsSlice.projects,
);

export const getProjects = createSelector(
  [selectProjectsSuccess],
  (projects) => projects,
);

export const selectProjectsIsLoading = createSelector(
  [selectProjectsReducer],
  (projectsSlice) => projectsSlice.isLoading,
);