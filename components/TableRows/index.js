// @flow
import styles from './styles.css';
import store from '../../store';
import { getCurrencies } from '../../actions/command';

export default class TableRows extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('class', styles.header);
  }

  connectedCallback() {
    store.dispatch(getCurrencies());
  }
}
