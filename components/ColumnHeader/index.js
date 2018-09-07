// @flow
import store from '../../store';
import { sortCurrenciesBy } from '../../actions/command';
import styles from './style.css';
import arrow from '../../images/Arrow.svg';

export default class ColumnHeader extends HTMLElement {
  name: string;

  direction: 0 | 1;

  constructor() {
    super();
    const wrapper = document.createElement('div');
    const text = this.getAttribute('text') || 'pass text attr!';
    this.name = this.getAttribute('name') || '';
    wrapper.addEventListener('click', () => this.handleClick());
    this.setAttribute('class', styles.className);
    wrapper.innerHTML = `<img src=${arrow} class="${styles.icon}"/>${text}`;
    this.appendChild(wrapper);
  }

  handleClick() {
    this.direction = this.direction === 0 ? 1 : 0;
    store.dispatch(sortCurrenciesBy({ name: this.name, direction: this.direction }));
  }
}
