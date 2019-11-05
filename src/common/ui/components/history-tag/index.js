import Couli from 'couli';
import styles from './styles';

export default (Store) => Couli.define(`
  <div>
    <span x-b="name"></span>
    <span x-b="removeButton"></span>
  </div>
`, {

  name: { _emc: (e, ci) => Store.startSearch('!' + ci.get('name') ) },

  removeButton: { _emc: (e, ci) => Store.removeTag( ci.get('name') ) },

}, styles);
