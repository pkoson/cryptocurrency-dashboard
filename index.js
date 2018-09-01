// @flow
import ColumnHeader from './components/ColumnHeader/index';
import TableHeader from './components/TableHeader/index';

window.addEventListener('sortByName', e => console.log('object', e.detail));
window.customElements.define('column-header', ColumnHeader);
window.customElements.define('table-header', TableHeader);
