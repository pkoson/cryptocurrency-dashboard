import { CURRENCIES, CURRENCIES_PRICE } from '../actions/document';
import { SORT_CURRENCIES_BY } from '../actions/command';

export default function currencies(state = {}, { payload, type }) {
  switch (type) {
    case CURRENCIES: {
      return { ...state, list: payload };
    }
    case CURRENCIES_PRICE: {
      return {
        ...state,
        list: state.list.map(item => ({
          ...item,
          financialData: payload.RAW[item.CoinInfo.Name].USD
        }))
      };
    }
    case SORT_CURRENCIES_BY: {
      const { name, direction } = payload;
      const getData = data => data.CoinInfo[name] || data.financialData[name];
      return {
        ...state,
        list: state.list.sort((a, b) => {
          if (getData(a) < getData(b)) {
            return direction === 0 ? 1 : -1;
          }
          if (getData(a) > getData(b)) {
            return direction === 0 ? -1 : 1;
          }
          return 0;
        })
      };
    }
    default:
      return state;
  }
}
