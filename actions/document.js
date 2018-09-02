export const CURRENCIES = 'document@CURRENCIES';

export function currencies(payload) {
  return {
    type: CURRENCIES,
    payload
  };
}
