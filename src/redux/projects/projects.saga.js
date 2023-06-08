import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import {
  fetchProjectsSuccess, 
  fetchProjectsFailed,
} from './projects.actions';
import { PROJECTS_ACTION_TYPES } from './projects.types';
import { baseUrl } from '../urls';

const url = `${baseUrl}/projects`

const getProjects = async() => {
  const response = await fetch(url);
  return await response.json();
}

export function* fetchProjectsAsync() {
  try {
    const projectsArray = yield call(getProjects, 'projects');
    yield put(fetchProjectsSuccess(projectsArray));
  } catch (error) {
    yield put(fetchProjectsFailed(error));
  }
}

export function* onFetchProjects() {
  yield takeLatest(PROJECTS_ACTION_TYPES.FETCH_PROJECTS_START, fetchProjectsAsync);
}

export function* projectsSaga() {
  yield all([call(onFetchProjects)]);
}
