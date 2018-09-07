// @flow
import styles from './styles.css';
import { filterByFullName } from '../../actions/command';
import store from '../../store';

export default class FilterPanel extends HTMLElement {
  filterBy: ?string;

  constructor() {
    super();
    this.filterBy = this.getAttribute('filterBy') || 'FullName';
    const wrapper = document.createElement('div');
    const input = document.createElement('input');
    wrapper.innerText = `Filter by ${this.filterBy}`;
    wrapper.setAttribute('class', styles.wrapper);
    input.setAttribute('class', styles.input);
    input.addEventListener('input', this.onInputChange);
    wrapper.appendChild(input);
    this.appendChild(wrapper);
  }

  onInputChange = (e) => {
    store.dispatch(filterByFullName({ name: this.filterBy, value: e.target.value }));
  };
}
