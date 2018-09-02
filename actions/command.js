// @flow
export const GET_CURRENCIES = 'command@GET_CURRENCIES';

export function getCurrencies(payload) {
  return {
    type: GET_CURRENCIES,
    payload
  };
}
