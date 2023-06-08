import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { 
  fetchBlogsSuccess,
  fetchBlogsFailed,
} from './blogs.actions';
import { BLOGS_ACTION_TYPES } from './blogs.types';
import { baseUrl } from '../urls';

const url = `${baseUrl}/blogs`

const getBlogs = async() => {
  const response = await fetch(url);
  return await response.json();
}
export function* fetchBlogsAsync() {
  console.log(url)
  try {
    const blogsArray = yield call(getBlogs, 'blogs');
    yield put(fetchBlogsSuccess(blogsArray));
  } catch (error) {
    yield put(fetchBlogsFailed(error));
  }
}

export function* onFetchBlogs() {
  yield takeLatest(BLOGS_ACTION_TYPES.FETCH_BLOGS_START, fetchBlogsAsync);
}

export function* blogsSaga() {
  yield all([call(onFetchBlogs)]);
}
