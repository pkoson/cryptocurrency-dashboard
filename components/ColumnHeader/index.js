// @flow
import styles from './style.css';

export default class ColumnHeader extends HTMLElement {
  constructor() {
    super();
    const wrapper = document.createElement('div');
    const text = this.getAttribute('text') || 'pass text attr!';
    this.name = this.getAttribute('name') || '';
    this.direction = 0;

    wrapper.textContent = text;
    wrapper.addEventListener('click', () => this.handleClick());
    wrapper.setAttribute('class', styles.className);
    this.appendChild(wrapper);
  }

  handleClick() {
    const event = new CustomEvent(`sortBy${this.name}`, {
      detail: { direction: this.direction }
    });
    window.dispatchEvent(event);
    this.direction = this.direction === 1 ? 0 : 1;
  }
}
