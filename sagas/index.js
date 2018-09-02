// @flow
import { takeEvery, all } from 'redux-saga/effects';
import { GET_CURRENCIES } from '../actions/command';
import { getCurrenciesSaga } from './getCurrencies';

function* watchGetCurrencies() {
  yield takeEvery(GET_CURRENCIES, getCurrenciesSaga);
}

export default function* rootSaga() {
  yield all([watchGetCurrencies()]);
}
