import Couli from 'couli';

import Store from '../../../store';
import styles from './styles';

export default Couli.define(`
  <li>
    <button x-b="query"></button>
    <button x-b="removeButton">Remove</button>
  <li>
`, {

  query: { events: { click: (e, ci) => Store.startSearch( ci.get('query') ) } },
  removeButton: { events: { click: (e, ci) => Store.removeSearch( ci.get('query') ) } }

}, styles);
