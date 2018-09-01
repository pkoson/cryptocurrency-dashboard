// @flow
export const GET_CURRENCIES = 'event@GET_CURRENCIES';

export function getCurrencies(payload) {
  return {
    type: GET_CURRENCIES,
    payload
  };
}
