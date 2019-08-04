import Couli from 'couli';
import styles from './styles';
import Store from '../../../store';
import markup from './markup.html';

Couli.define('options', markup, {

  selectedColor: {},

  pageSize: { events: { keyup: (e) => Store.updateForm(e.target.value, 'PAGE_SIZE') } },

  colorSchemes: {
    events: { change: (e) => Store.updateForm(e.target.value, 'COLOR') },

    attrs: ($) => ({ value: $.selectedColor })
  },

  saveButton: { events: { click: (e) => Store.saveSettings() } },
  defaultsButton: { events: { click: (e) => Store.resetToDefaults() } },

  '': {
    hooks: {
      mount: (el, data, ci) => {
        ci.set(Store.getState());

        Store.addListener((store) => {
          const state = store.getState();
          ci.markup('colorSchemes').value = state.selectedColor;

          switchElementVisibility(ci.markup('tagsPanel'), state.allExistingTags.length);
          switchElementVisibility(ci.markup('searchesPanel'), state.savedSearches.length);
          
          ci.set(state);
        });

        Store.loadData();
      }
    }
  }

}, styles);

function switchElementVisibility (el, bool) {
  bool ? el.classList.remove('hidden') : el.classList.add('hidden')
}
