// @flow
const GET_CURRENCIES = 'event@GET_CURRENCIES';

export function getCurrencies(userId, data) {
  return {
    type: GET_CURRENCIES,
    data
  };
}
