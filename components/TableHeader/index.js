// @flow
export default class TableHeader extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const wrapper = document.createElement('div');
    const name = this.getAttribute('name') || '';
    const text = this.getAttribute('text') || 'pass text attr!';
    let direction = 0;

    function handleClick() {
      const event = new CustomEvent(`sortBy${name}`, { detail: { direction } });
      window.dispatchEvent(event);
      direction = direction === 1 ? 0 : 1;
    }

    wrapper.textContent = text;
    wrapper.addEventListener('click', () => handleClick());
    wrapper.setAttribute('class', 'table-header');
    shadowRoot.appendChild(wrapper);
  }
}
