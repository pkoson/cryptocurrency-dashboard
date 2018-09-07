// @flow
import styles from './styles.css';
import store from '../../store';
import { getCurrenciesList } from '../../actions/command';
import { selectors } from '../../reducers/currencies';
import observeStore from '../utils';

export default class TableRows extends HTMLElement {
  listElement: HTMLElement;

  listData: Array<{ CoinInfo: { FullName: string, Name: string }, price: { USD: string } }>;

  constructor() {
    super();
    this.listElement = document.createElement('div');
    this.setAttribute('class', styles.header);
    this.addStoreListener();
  }

  connectedCallback() {
    store.dispatch(getCurrenciesList());
  }

  addStoreListener() {
    observeStore(
      store,
      state => state.currencies,
      (state) => {
        this.renderRows(selectors.getFiltredList(state));
      }
    );
  }

  renderRows(
    data: Array<{
      CoinInfo: { FullName: string, Name: string },
      financialData: { PRICE: number, MKTCAP: number, CHANGEPCT24HOUR: number }
    }>
  ) {
    if (this.listElement.parentNode === this) {
      this.removeChild(this.listElement);
    }
    this.listElement.innerHTML = '';
    data.forEach(({ CoinInfo: { FullName, Name }, financialData }) => {
      const item = document.createElement('div');
      item.setAttribute('class', styles.row);

      // TODO: create helper for this
      item.innerHTML = `<div class=${styles.item}>${FullName}</div><div class=${
        styles.item
      }>${Name}</div><div class=${styles.item}>${(financialData && financialData.PRICE)
        || '-'}</div><div class=${styles.item}>${(financialData && Math.round(financialData.MKTCAP))
        || '-'}</div><div class=${styles.item}>${(financialData
        && financialData.CHANGEPCT24HOUR.toFixed(2))
        || '-'} %</div>`;
      this.listElement.appendChild(item);
    });
    this.appendChild(this.listElement);
  }
}
