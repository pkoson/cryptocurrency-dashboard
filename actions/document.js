export const CURRENCIES = 'document@CURRENCIES';
export const CURRENCIES_PRICE = 'document@CURRENCIES_PRICE';

export function currencies(payload) {
  return {
    type: CURRENCIES,
    payload
  };
}
export function currenciesPrice(payload) {
  return {
    type: CURRENCIES_PRICE,
    payload
  };
}
