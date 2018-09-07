// @flow
import { call, put } from 'redux-saga/effects';
import { currencies } from '../actions/document';
import { getMultiplePrice } from '../actions/command';

export default function* getCurrenciesListSaga(): Generator<*, *, *> {
  try {
    const data = yield call(
      fetch,
      'https://min-api.cryptocompare.com/data/top/totalvol?limit=10&tsym=USD'
    );
    const json = yield data.json();
    yield put(currencies(json.Data));

    const currenciesArr = json.Data.map(item => item.CoinInfo.Name);
    yield put(getMultiplePrice(currenciesArr));
  } catch (error) {
    // TODO: put error aciton
  }
}
