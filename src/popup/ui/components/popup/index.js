import Couli from 'couli';
import styles from './styles';
import Store from '../../../store';

const INITIAL_POPUP_POSITION = { top: 20, left: 'auto', right: 20 };

Couli.define('history-searcher-popup',
  `<div>
    <div x-b="content">
      <div x-lb="assignedTags" class="hidden">
        <history-tag>
      </div>
      <div class="field">
        <input x-b="newTagInput" /> <button x-b="addTagButton">Add tag</button>
      </div>
      <div class="field">
        <select x-lb="allExistingTags">
          <option x-b="option">
        </select>
      </div>
      <button x-b="helpButton" class="link">Help</button>
      <button x-b="controlsButton" class="link">Controls</button>
    </div>
  </div>`, {

  selected: {},

  newTagInput: {
    events: {
      keyup: (e) => {
        e.stopPropagation();
        if (e.keyCode === 13) {
          Store.addNewTag(e.target.value);
          return;
        }

        Store.handleInput(e.target.value);
      }
    }
  },

  addTagButton: {
    events: {
      click: () => Store.addNewTag(),
    }
  },

  allExistingTags: {

    events: {
      change: (e, el, ci) => {
        if (e.target.value) {
          Store.addNewTag(e.target.value);
          ci.set({ selected: e.target.value });
        }
      }
    },

    attrs: ($) => ({ value: $.selected }),
  },

  controlsButton: {
    events: {
      click: () => Store.openSettings(),
    }
  },

  helpButton: {
    events: {
      click: () => Store.openHelp(),
    }
  },

  '': {
    hooks: {
      mount: (el, data, ci) => {

        Store.addListener((store) => {
          const state = store.getState();
          switchElementVisibility(ci.markup('assignedTags'), state.assignedTags.length);

          ci.set(state);
        });

        Store.getData()
      }
    }
  }
}, styles({ INITIAL_POPUP_POSITION }));

function switchElementVisibility (el, bool) {
  bool ? el.classList.remove('hidden') : el.classList.add('hidden')
}
