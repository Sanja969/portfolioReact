import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { 
  fetchArticlesSuccess,
  fetchArticlesFailed,
} from './articles.actions';
import { ARTICLES_ACTION_TYPES } from './articles.types';
import { baseUrl } from '../urls';

const url = `${baseUrl}/articles`

const getArticles = async() => {
  const response = await fetch(url);
  return await response.json();
}
export function* fetchArticlesAsync() {
  try {
    const articlesArray = yield call(getArticles, 'articles');
    yield put(fetchArticlesSuccess(articlesArray));
  } catch (error) {
    yield put(fetchArticlesFailed(error));
  }
}

export function* onFetchArticles() {
  yield takeLatest(ARTICLES_ACTION_TYPES.FETCH_ARTICLES_START, fetchArticlesAsync);
}

export function* articlesSaga() {
  yield all([call(onFetchArticles)]);
}
