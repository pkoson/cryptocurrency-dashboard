// @flow
import { takeEvery, all } from 'redux-saga/effects';
import { GET_CURRENCIES } from '../actions/command';
import { getCurrenciesListSaga } from './getCurrenciesList';

function* watchgetCurrenciesList() {
  yield takeEvery(GET_CURRENCIES, getCurrenciesListSaga);
}

export default function* rootSaga() {
  yield all([watchgetCurrenciesList()]);
}
