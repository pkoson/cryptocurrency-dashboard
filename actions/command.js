// @flow
export const GET_CURRENCIES = 'command@GET_CURRENCIES';
export const GET_MULTIPLE_PRICE = 'command@GET_MULTIPLE_PRICE';

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
