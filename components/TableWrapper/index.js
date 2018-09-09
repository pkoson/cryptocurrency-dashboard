// @flow
import styles from './styles.css';

export default class TableWrapper extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('class', styles.wrapper);
  }
}
