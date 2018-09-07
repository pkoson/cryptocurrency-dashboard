import { actionChannel } from 'redux-saga/effects';
import { CURRENCIES, CURRENCIES_PRICE } from '../actions/document';
import { SORT_CURRENCIES_BY, FILTER_BY } from '../actions/command';

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
        list: (state.displayList || state.list).sort((a, b) => {
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
    case FILTER_BY: {
      const { name, value } = payload;
      return {
        ...state,
        filtredList: {
          ...state.filtredList,
          [name]: state.list.reduce((pV, cV) => {
            if (cV.CoinInfo[name].toLowerCase().indexOf(value.toLowerCase()) >= 0) {
              pV.push(cV.CoinInfo.Name);
            }
            return pV;
          }, [])
        }
      };
    }
    default:
      return state;
  }
}

function getFiltredList({ filtredList, list = [] }) {
  if (!filtredList) return list;
  const keys = Object.keys(filtredList);
  if (keys.length === 1) return list.filter(item => filtredList[keys[0]].indexOf(item.CoinInfo.Name) >= 0);
  const commonList = filtredList.Name.filter(element => filtredList.FullName.indexOf(element) >= 0);
  return list.filter(item => commonList.indexOf(item.CoinInfo.Name) >= 0);
}

export const selectors = {
  getFiltredList
};
