// @flow
export const GET_CURRENCIES = 'command@GET_CURRENCIES';

export function getCurrenciesList(payload) {
  return {
    type: GET_CURRENCIES,
    payload
  };
}
