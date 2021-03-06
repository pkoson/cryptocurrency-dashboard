// @flow
import { call, put } from 'redux-saga/effects';
import { currenciesPrice } from '../actions/document';

export default function* getMultiplePrice({ list }: { list: Array<string> }): Generator<*, *, *> {
  try {
    const data = yield call(
      fetch,
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${list.join(',')}&tsyms=USD`
    );
    const json = yield data.json();
    yield put(currenciesPrice(json));
  } catch (error) {
    console.error(error);
  }
}
