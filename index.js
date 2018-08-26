// @flow
import TableHeader from './components/TableHeader/index';

window.addEventListener('sortByName', e => console.log('object', e.detail));
window.customElements.define('table-header', TableHeader);
