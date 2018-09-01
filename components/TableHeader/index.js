// @flow
import styles from './styles.css';

export default class TableHeader extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('class', styles.header);
  }
}
