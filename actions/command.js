// @flow
export const GET_CURRENCIES = 'command@GET_CURRENCIES';
export const GET_MULTIPLE_PRICE = 'command@GET_MULTIPLE_PRICE';
export const SORT_CURRENCIES_BY = 'command@SORT_CURRENCIES_BY';
export const FILTER_BY = 'command@FILTER_BY';

export function getCurrenciesList() {
  return {
    type: GET_CURRENCIES
  };
}

export function getMultiplePrice(list: Array<string>) {
  return {
    type: GET_MULTIPLE_PRICE,
    list
  };
}
export function sortCurrenciesBy(payload: { name: string, direction: 0 | 1 }) {
  return {
    type: SORT_CURRENCIES_BY,
    payload
  };
}
export function filterByFullName(payload: { name: string, value: EventTarget }) {
  return {
    type: FILTER_BY,
    payload
  };
}
