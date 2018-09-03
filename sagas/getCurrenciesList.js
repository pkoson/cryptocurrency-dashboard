// @flow
import { call, put } from 'redux-saga/effects';
import { currencies } from '../actions/document';

export default function* getCurrenciesListSaga() {
  try {
    const data = yield call(
      fetch,
      'https://min-api.cryptocompare.com/data/top/totalvol?limit=10&tsym=USD'
    );
    const json = yield data.json();
    yield put(currencies(json.Data));
  } catch (error) {
    // TODO: put error aciton
  }
}
