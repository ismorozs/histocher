import Couli from 'couli';

import Store from '../../../store';
import styles from './styles';

Couli.define('search-query', `
  <li>
    <button x-b="query"></button>
    <button x-b="removeButton">Remove</button>
  <li>
`, {

  query: { events: { click: (e, el, ci) => Store.startSearch( ci.get('query') ) } },
  removeButton: { events: { click: (e, el, ci) => Store.removeSearch( ci.get('query') ) } }

}, styles);
