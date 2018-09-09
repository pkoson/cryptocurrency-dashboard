// @flow
import 'babel-polyfill';

import ColumnHeader from './components/ColumnHeader';
import TableHeader from './components/TableHeader';
import TableRows from './components/TableRows';
import FilterPanel from './components/FilterPanel';
import FilterPanelSection from './components/FilterPanelSection';
import TableWrapper from './components/TableWrapper';

window.customElements.define('column-header', ColumnHeader);
window.customElements.define('table-header', TableHeader);
window.customElements.define('table-rows', TableRows);
window.customElements.define('filter-panel', FilterPanel);
window.customElements.define('filter-panel-section', FilterPanelSection);
window.customElements.define('table-wrapper', TableWrapper);
