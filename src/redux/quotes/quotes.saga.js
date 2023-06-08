import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import { 
  fetchQuoteSuccess,
  fetchQuoteFailed,
} from './quotes.actions';
import { QUOTES_ACTION_TYPES } from './quotes.types';
import { baseUrl } from '../urls';

const url = `${baseUrl}/quotes`

const getQuote = async() => {
  const response = await fetch(url);
  const json = await response.json()
  localStorage.setItem('quote', json.text);
  return await json;
}
export function* fetchQuoteAsync() {
  try {
    const quotesArray = yield call(getQuote, 'Quotes');
    yield put(fetchQuoteSuccess(quotesArray));
  } catch (error) {
    yield put(fetchQuoteFailed(error));
  }
}

export function* onFetchQuote() {
  yield takeLatest(QUOTES_ACTION_TYPES.FETCH_QUOTE_START, fetchQuoteAsync);
}

export function* quotesSaga() {
  yield all([call(onFetchQuote)]);
}
