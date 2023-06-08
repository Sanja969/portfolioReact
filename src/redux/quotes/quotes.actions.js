/* eslint-disable import/prefer-default-export */
import { QUOTES_ACTION_TYPES } from './quotes.types';

export const fetchQuoteStart = () => (
  {
  type: QUOTES_ACTION_TYPES.FETCH_QUOTE_START,
})

export const fetchQuoteSuccess = (quote) => ({
  type: QUOTES_ACTION_TYPES.FETCH_QUOTE_SUCCESS,
  payload: quote,
})

export const fetchQuoteFailed = (error) => ({
  type: QUOTES_ACTION_TYPES.FETCH_QUOTE_FAILED,
  payload: error,
})