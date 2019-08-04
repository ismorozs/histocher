import Couli from 'couli';

import Store from '../../../store';
import styles from './styles';

Couli.define('history-tag', `
  <div>
    <span x-b="name"></span>
    <span x-b="removeButton"></span>
  </div>
`, {

  name: {
    events: {
      click: (e, el, ci) => Store.startSearch('!' + ci.get('name')),
    }
  },

  removeButton: {
    events: {
      click: (e, el, ci) => Store.removeTag( ci.get('name') )
    }
  }

}, styles);
