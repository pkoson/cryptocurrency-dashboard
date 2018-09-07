// @flow
import styles from './styles.css';

export default class FilterPanelSection extends HTMLElement {
  constructor() {
    super();
    this.setAttribute('class', styles.header);
  }
}
