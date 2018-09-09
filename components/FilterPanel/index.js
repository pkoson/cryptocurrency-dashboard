// @flow
import styles from './styles.css';
import { filterByFullName } from '../../actions/command';
import store from '../../store';

export default class FilterPanel extends HTMLElement {
  filterBy: ?string;

  constructor() {
    super();
    this.filterBy = this.getAttribute('filterBy');
    const text = this.getAttribute('text') || '';
    const input = document.createElement('input');
    this.innerText = `Filter by ${text}`;
    this.setAttribute('class', styles.wrapper);
    input.setAttribute('class', styles.input);
    input.addEventListener('input', this.onInputChange);
    this.appendChild(input);
  }

  onInputChange = ({ target }: { target: Object }): void => {
    if (this.filterBy) {
      store.dispatch(filterByFullName({ name: this.filterBy, value: target.value }));
    }
  };
}
