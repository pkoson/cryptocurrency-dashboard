// @flow
import { takeEvery, all } from 'redux-saga/effects';
import { GET_CURRENCIES, GET_MULTIPLE_PRICE } from '../actions/command';
import getCurrenciesListSaga from './getCurrenciesList';
import getMultiplePriceSaga from './getMultiplePrice';

function* watchGetCurrenciesList() {
  yield takeEvery(GET_CURRENCIES, getCurrenciesListSaga);
}
function* watchGetMultiplePrice() {
  yield takeEvery(GET_MULTIPLE_PRICE, getMultiplePriceSaga);
}

export default function* rootSaga(): Generator<*, *, *> {
  yield all([watchGetCurrenciesList(), watchGetMultiplePrice()]);
}
