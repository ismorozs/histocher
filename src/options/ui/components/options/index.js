import Couli from 'couli';
import styles from './styles';
import Store from '../../../store';
import markup from './markup.html';

import SearchQuery from '../search-query/index';

import createHistoryTag from '../../../../common/ui/components/history-tag/index';

const HistoryTag = createHistoryTag(Store);

export default Couli.define({
  historyTag: [ HistoryTag ],
  searchQuery: [ SearchQuery ]
}, markup, {

  selectedColor: {},

  pageSize: {
    _eku: (e) => Store.updateForm(e.target.value, 'PAGE_SIZE'),
    _ech: (e) => Store.updateForm(e.target.value, 'PAGE_SIZE')
  },
  visitedPagesLength: {
    _eku: (e) => Store.updateForm(e.target.value, 'VISITED_PAGES_LENGTH'),
    _ech: (e) => Store.updateForm(e.target.value, 'VISITED_PAGES_LENGTH')
  },

  colorSchemes: {
    _ech: (e) => Store.updateForm(e.target.value, 'COLOR'),

    _a: ($) => ({ value: $.selectedColor })
  },

  saveButton: { _emc: (e) => Store.saveSettings() },
  defaultsButton: { _emc: (e) => Store.resetToDefaults() },

  tagsPanel: { _c: ($) => ({ hidden: !$.allExistingTags.length }) },
  searchesPanel: { _c: ($) => ({ hidden: !$.savedSearches.length }) },

  '': {
    _hm: (el, ci) => {
      ci.set(Store.getState());

      Store.addListener((store) => {
        const state = store.getState();
        ci.markup('colorSchemes').value = state.selectedColor;     
        ci.set(state);
      });

      Store.loadData();
    }
  }

}, styles);
